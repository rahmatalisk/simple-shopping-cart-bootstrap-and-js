
function productNumber(product,amount,isIncrease){
    const productInput = document.getElementById(product+ '-input').innerText;
    const productInputNmuber = parseFloat(productInput);
    if(isIncrease){
        document.getElementById(product +'-input').innerText =productInputNmuber + 1;
    }else if(productInputNmuber > 0){
        document.getElementById(product +'-input').innerText =productInputNmuber - 1;
    };
    document.getElementById(product + '-total').innerText = document.getElementById(product + '-input').innerText * amount;
    
};
//Get Total
function update(){
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const caseTotal = parseInt(document.getElementById('case-total').innerText);
    document.getElementById('total').innerText = phoneTotal + caseTotal;
};
//Get SubTotal
function subtotal(){
    const total = document.getElementById('total').innerText;
    const tax = total / 10;
    document.getElementById('tax').innerText = tax;
    document.getElementById('sub-total').innerText = tax + parseInt(total);
}

document.getElementById('phone-plus').addEventListener('click',function(){
    productNumber('phone',1567,true);
    update();
    subtotal();
});
document.getElementById('phone-minus').addEventListener('click',function(){
    productNumber('phone',1567,false);
    update();
    subtotal();
});
document.getElementById('case-plus').addEventListener('click',function(){
    productNumber('case',127,true);
    update();
    subtotal();
});
document.getElementById('case-minus').addEventListener('click',function(){
    productNumber('case',127,false);
    update();
    subtotal();
});
// document.getElementById('phone-minus').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phone-input').innerText;
//     const phoneInputNmuber = parseFloat(phoneInput);
//     if(phoneInputNmuber <= 0){
//         return;
//     }
//     document.getElementById('phone-input').innerText =phoneInputNmuber - 1;
// });

    
