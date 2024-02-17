const cards= document.getElementsByClassName("card");



var totalPrice = 0.00;
for(const card of cards){
    card.addEventListener("click",function(){
        //product title
        const titleElement = card.childNodes[3].childNodes[1];
        const title = titleElement.innerText;

        //product price
        const PriceElement = card.querySelector('.card-body').childNodes[5].childNodes[0];
        const priceText= PriceElement.innerText;
        const price = parseFloat(priceText);


        //create a list item
        const li = document.createElement("li");
        li.innerText=title;

        //total price
        totalPrice = totalPrice + price;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2) +"$";


        document.getElementById('product').appendChild(li);
    
        document.getElementById('total').innerText = totalPrice.toFixed(2)+ "$";

        //add event listener for coupon code apply button
        const applyBtn = document.getElementById('applyBtn');
        const inputCode = document.getElementById('input_code');

        applyBtn.addEventListener('click', function() {
            const couponCode = inputCode.value;
            const couponArray = couponCode.split(' ').join('').toUpperCase();
        
            if(couponArray === "SELL200") {
                if(totalPrice >= 200) {
                    const discount = totalPrice * 0.2;
                    document.getElementById('discount').innerText = discount.toFixed(2) + "$";
                    const total = totalPrice - discount;
                    document.getElementById('total').innerText = total.toFixed(2)+ "$";
                    inputCode.value = '';
                } else {
                    // Alert the user or handle the case where the total price is less than 200
                    alert("Please purchase more to use this coupon code.");
                    inputCode.value = '';
                }
            }
            
        });


    });
}