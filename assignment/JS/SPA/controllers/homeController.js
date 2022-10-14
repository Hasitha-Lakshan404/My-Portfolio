$('#btnSearchOrder').click(function () {

    for (var search of orders) {

        let searchOrder = $('#searchOrder').val();
        let chooseOrderType = $('#chooseOrderType').val();
        if (chooseOrderType === "ID") {
            console.log("ID : "+searchOrder +"==="+ search.orId)

            if (searchOrder === search.orId) {
                $('#orderIdDash').val(search.orId);
                $('#OrderDateDash').val(search.orDate);
                $('#customerNameDash').val(search.orCusName);
                $('#discountDash').val(search.orDis);
                $('#subTotDash').val(search.orSubTotal);

            }
        } else if (chooseOrderType === "1") {
            console.log("1 : "+searchOrder +"==="+ search.cusName)
            if (searchOrder === search.orCusName) {
                $('#orderIdDash').val(search.orId);
                $('#OrderDateDash').val(search.orDate);
                $('#customerNameDash').val(search.orCusName);
                $('#discountDash').val(search.orDis);
                $('#subTotDash').val(search.orSubTotal);
            }
        } else if (chooseOrderType === "2") {
            console.log("2 : "+searchOrder +"==="+ search.ordDate)

            if (searchOrder === search.orDate) {
                $('#orderIdDash').val(search.orId);
                $('#OrderDateDash').val(search.orDate);
                $('#customerNameDash').val(search.orCusName);
                $('#discountDash').val(search.orDis);
                $('#subTotDash').val(search.orSubTotal);
            }
        }

    }
});

$('#btnClearOrd').click(function (){
    $('#orderIdDash').val("");
    $('#OrderDateDash').val("");
    $('#customerNameDash').val("");
    $('#discountDash').val("");
    $('#subTotDash').val("");
    $('#searchOrder').val("");
});

$('#btnDeleteOrd').click(function (){
    let deleteOrderId = $('#orderIdDash').val();

    if (deleteOrder(deleteOrderId)){
        alert("Order Successfully Deleted....");
        setOrderTextfieldValues("", "", "", "","");
    }else{
        alert("No such Order to delete. please check the id");
    }
});


/*FUNCTIONS*/

function searchOrder(orderId){
    for(var i of orders){
        if (i.orId === orderId){
            return i;
        }
    }
    return null;
}

function deleteOrder(orderId){
    let ordObj = searchOrder(orderId);

    if (ordObj != null){
        let indexNumber = orders.indexOf(ordObj);
        orders.splice(indexNumber,1);
        loadAllOrder();
        return true;
    }else {
        return false;
    }
}

function setOrderTextfieldValues(orderId,date,name,dis,cost){

    $('#orderIdDash').val(orderId);
    $('#OrderDateDash').val(date);
    $('#customerNameDash').val(name);
    $('#discountDash').val(dis);
    $('#subTotDash').val(cost);
}