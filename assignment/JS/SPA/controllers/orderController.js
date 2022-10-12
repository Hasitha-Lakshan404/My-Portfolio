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

    let itemCode=$('#itemIdOrd').val();
    let itmName = $('#item').val();
    let itmPrice = $('#priceOrd').val();
    let itemOrderQty = $('#orderQty').val();

    let total =itmPrice*itemOrderQty;

    var tempOrder={
        orItemCOde:itemCode,
        orItemName:itmName,
        orItemPrice:itmPrice,
        orItemQTY:itemOrderQty,
        orItemTotal:total
    }

    tempOrderCartAr.push(tempOrder);

    addCartData();

})

function addCartData() {
    $("#tblCart> tr").detach();

    for (var tc of tempOrderCartAr){
        var row="<tr><td>"+tc.orItemCOde+"</td><td>"+tc.orItemName+"</td><td>"+tc.orItemPrice+"</td><td>"+tc.orItemQTY+"</td><td>"+tc.orItemTotal+"</td></tr>";
        $('#tblCart').append(row);
    }
    trCusSelector();
}
