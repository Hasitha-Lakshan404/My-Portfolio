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


    let rowExists = searchRowExists(itemCode);
    if(rowExists!=null){
        let newQty=((parseInt(rowExists.orItemQTY))+(parseInt(itemOrderQty)));

        // rowExists.orItemQTY.val(newQty);
        rowExists.orItemQTY=newQty;
        rowExists.orItemTotal=parseFloat(itmPrice)*newQty;
        addCartData();

    }else{
        var tempOrder={
            orItemCOde:itemCode,
            orItemName:itmName,
            orItemPrice:itmPrice,
            orItemQTY:itemOrderQty,
            orItemTotal:total
        }
        tempOrderCartAr.push(tempOrder);

        addCartData();
    }

    minQty(itemCode,itemOrderQty);

})

/*Add Table*/
function addCartData() {
    $("#tblCart> tr").detach();

    for (var tc of tempOrderCartAr){
        var row="<tr><td>"+tc.orItemCOde+"</td><td>"+tc.orItemName+"</td><td>"+tc.orItemPrice+"</td><td>"+tc.orItemQTY+"</td><td>"+tc.orItemTotal+"</td></tr>";
        $('#tblCart').append(row);
    }
    trCusSelector();
    getTotal();
}

function getTotal() {
    let tempTot=0;
    for (let tempOrderCartArElement of tempOrderCartAr) {
        tempTot=tempTot+tempOrderCartArElement.orItemTotal;
    }
    $('#total').val(tempTot);

}

/*discount*/
$('#discount').on('keyup',function (){
    let dis=$('#discount').val();
    let tot=$('#total').val();
    let totMin=0;
    let subTot=0;

    console.log(dis+"=="+tot);
    totMin=parseFloat(tot)*(dis/100);
    subTot=tot-totMin;

    $('#subTotal').val(subTot);
})

/*Cash*/
$('#cash').on('keyup',function (){
    let cash=$('#cash').val();
    let subT=$('#subTotal').val();


    $('#balance').val((parseFloat(cash))-parseFloat(subT));
})

/*Remove Duplicate Row*/
function searchRowExists(itemCode) {
    for (let tempOr of tempOrderCartAr) {
        console.log(tempOr.orItemCOde+"-----"+itemCode);
        if(tempOr.orItemCOde===itemCode){
            return tempOr
        }
    }
    return null;
}

/*Min QTY*/
function minQty(itemCode,orderQty) {
    for (let itemArElement of itemAr) {
        if(itemArElement.itemCode===itemCode){
            itemArElement.qtyOnHand=parseInt(itemArElement.qtyOnHand)-parseInt(orderQty);
        }
    }
    addTable();
    clearData();

}

function clearData() {
    $('#qtyOnHandOrd').val("");
    $('#item').val("");
    $('#priceOrd').val("");
    $('#orderQty').val("");
}




