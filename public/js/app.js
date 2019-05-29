const myCard = [];
let total = 0;

function getTotalPrice(prod, qty){
    total += parseFloat(prod.price)*parseInt(qty);
    console.log(total)
    $(".totalInCard").text("$"+total.toFixed(2));
}

function cardUpdate(){
    $(".NumItemInCard").text(`(${myCard.length})`);
    $(".totalCard").text('$'+ getTotalPrice());
}

function productSummary(prod, qty){
    const prodsum =  (`
          <tr>
            <td>${qty}</td>
            <td>${prod.product_name}</td>
            <td>$${(parseFloat(prod.price)*parseInt(qty)).toFixed(2)}</td>
          </tr>
          `);
     
      $(".listItems").prepend(prodsum);
  }
function generatOption(itensLength){
    let optList = "";
    for(let i=1; i<itensLength; i++){
        optList +=  "<option value="+i+">"+i+"</option>"
    }
    return optList;
}


function render(product){
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

function renders(products){
    return products.map(function(product){
        return render(product);
    })
}

function addToCard(){
    $("#ListProducts").on("click", ".btn_prod", function(event){
       const prod_id =  $(this).attr("data-id");
       let quantity = $("#quantity"+prod_id).val();
       //console.log(quantity);
       $.get("/api/product/"+prod_id).then(function(prod){
           //if(myCard.includes(prod))
           //myCard.push(prod);
           productSummary(prod, quantity);
           getTotalPrice(prod, quantity);
       })
    })
}

function checkout(){
    $(".btn_checkout").click(function(event){
        $(".listItems").empty();
        $(".totalInCard").text('$0.00');
        total = 0;
        $("#CheckoutModal").modal('toggle');
    })
    
}



$(document).ready(function(){

    total = 0;

    $("#srchTxt").click(function(event){
        let val = $("#srchTxt").val();
        console.log(val);
    })
    
    $.get("/api/products").then(function(results){
        console.log(results);
        $("#ListProducts").html(renders(results));
    });

    addToCard();
    checkout();
   
   
});