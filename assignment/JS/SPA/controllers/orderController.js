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



$('#customerIdOrd').on('change',function (){
    /*get Customer*/
    let customer = searchCustomer($('#customerIdOrd').val());

    $('#customerNameOrd').val(customer.cusName);


});

$('#itemIdOrd').on('change',function (){
    console.log($('#itemIdOrd').val());



});