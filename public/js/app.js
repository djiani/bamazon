const myCard = [];
let total = 0;
let prod_index = -1;

function getTotalPrice() {
    
   let total = myCard.reduce(function(sum, prod){
        return sum + parseFloat(prod.prod.price) * parseInt(prod.quantity);
    }, 0);

    console.log(total.toFixed(2));
     
     $(".listItems").append(`
     
        <tr>
            <th></th>
            <th>Total</th>
            <th class="totalInCard">$${total.toFixed(2)}</th>
            <th></th>
        </tr>
  
     `)
    
}

// function cardUpdate(){
//     $(".NumItemInCard").text(`(${myCard.length})`);
//     $(".totalCard").text('$'+ getTotalPrice());
// }

function productSummary() {
    let prodsum = myCard.map(function (prod, index) {
        return (
            `
            <tr>
                <td>${prod.quantity}</td>
                <td>${prod.prod.product_name}</td>
                <td>$${(parseFloat(prod.prod.price) * parseInt(prod.quantity)).toFixed(2)}</td>
                <td><button class="btn text-danger btn-light btnProdDel" data-index=${index}>x</button></td>
            </tr>
            `);
    });
           
    $(".listItems").html(prodsum);
    
}

function generatOption(itensLength) {
    let optList = "";
    for (let i = 1; i < itensLength; i++) {
        optList += "<option value=" + i + ">" + i + "</option>"
    }
    return optList;
}


function render(product) {
    return (
        `
        <div class="card card_prod">
            <img class="card-img-top  img_prod" src= ${product.product_url} alt="Card image">
            <div >
                <h6 class="card-title">${product.product_name}</h6>
                <h6> $${product.price}</h6>
                <div>
                    <select class="btn btn-light" id="quantity${product.id}">
                        ${generatOption(product.stock_quantity)}
                    </select>
                    <button class="btn-info btn_prod" data-id=${product.id}>Add to cart</button>
                </div>
            </div>
           
        </div>
        `);

}

function renders(products) {
    if (products && products.length === 0) {
        return `<div class="card"> 
            <h1>No products found!</h1> 
            <h3>Please, verify your search criteria!</h3>
            <p>Follow the instructions below to guide your through your search:</p>
            <ul>
                <li>Leave the search box empty</li>
                <li>select the only the category to display all products from that category</li>
                <li>category all will display all available products in stock </li>
            </ul>
        </div>`
    } else
        return products.map(function (product) {
            return render(product);
        })
}

function addToCard() {
    $("#ListProducts").on("click", ".btn_prod", function (event) {
        const prod_id = $(this).attr("data-id");
        let quantity = $("#quantity" + prod_id).val();
        //console.log(quantity);
        $.get("/api/product/" + prod_id).then(function (prod) {
            //if(myCard.includes(prod))
            myCard.push({ prod: prod, quantity: quantity });
            productSummary();
            getTotalPrice();
        })
    })
}

function checkout() {
    $(".btn_checkout").click(function (event) {
        $(".listItems").empty();
        $(".totalInCard").text('$0.00');
        total = 0;
        $("#CheckoutModal").modal('toggle');
    })

}

function search() {
    $(".btn-submit").on("click", function (event) {
        event.preventDefault();
        let searchTxt = $("#srchFld").val().trim();
        let category = $("#srchCat").val().trim();
        console.log(searchTxt + " " + category);
        const data = {
            search: searchTxt,
            category: category
        }
        $.post("/search", data, function (data) {
            console.log(data);
            $("#ListProducts").html(renders(data));
            $("#srchFld").val("");
        });
    })

}

function deleteProd() {
    $(".listItems").on("click", ".btnProdDel", function (event) {
        // alert('clicked!');
        // console.log($(this).parentsUntil("tbody"));
        // $(this).parentsUntil("tbody").remove();
        let index = $(this).attr("data-index");
        console.log(index);
        myCard.splice(parseInt(index), 1);
        productSummary();
        getTotalPrice();
    });
}



$(document).ready(function () {

    total = 0;

    $("#srchTxt").click(function (event) {
        let val = $("#srchTxt").val();
        console.log(val);
    })

    $.get("/api/products").then(function (results) {
        console.log(results);
        $("#ListProducts").html(renders(results));
    });

    addToCard();
    checkout();
    search();
    deleteProd();

});