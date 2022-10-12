function loadAllCustomerId() {
    $('#customerIdOrd').empty();
    for (let customerArElement of customerAr) {
        $('#customerIdOrd').append(`<option>${customerArElement.cusId}</option>`);
    }
}

function loadAllItemId() {
    $('#itemIdOrd').empty();
    for (let itemArElement of itemAr) {
        $('#itemIdOrd').append(`<option>${itemArElement.itemCode}</option>`);
    }
}


/*Listener fir the Customer Combo*/
$('#customerIdOrd').on('change',function (){
    /*get Customer*/
    let customer = searchCustomer($('#customerIdOrd').val());

    $('#customerNameOrd').val(customer.cusName);
    $('#salaryOrd').val(customer.cusSalary);
    $('#addressOrd').val(customer.cusAddress);


});

/*Listener fir the Item Combo*/
$('#itemIdOrd').on('change',function (){
    console.log($('#itemIdOrd').val());

    let item = searchItem($('#itemIdOrd').val());

    $('#item').val(item.itemName);
    $('#priceOrd').val(item.itemPrice);
    $('#qtyOnHandOrd').val(item.qtyOnHand);

});


$('#btnAddToCart').click(function (){

})

