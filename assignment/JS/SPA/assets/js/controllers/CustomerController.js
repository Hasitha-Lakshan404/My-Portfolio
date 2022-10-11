var customerAr=[];

$('#btnSaveCustomer').click(function (event) {
    cusSave($('#customerId').val(),$('#customerName').val(),$('#customerAddress').val(),$('#customerSalary').val());


});

function addTable() {
    $("#tblCustomer> tr").detach();

    for (var customer of customerAr){
        var row="<tr><td>"+customer.cusId+"</td><td>"+customer.cusName+"</td><td>"+customer.cusAddress+"</td><td>"+customer.cusSalary+"</td></tr>";
        $('#tblCustomer').append(row);
    }
    trSelector();

}

/*====Add Focus Event when user Click Enter====*/
$('#customerId').on('keydown',function (event){

    if(event.key==="Enter"){
        $("#customerName").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerSalary").focus();
    }

});
$('#customerName').on('keydown',function (event){

    if(event.key==="Enter"){
        $("#customerAddress").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerId").focus();
    }

});
$('#customerAddress').on('keydown',function (event){

    if(event.key==="Enter"){
        $("#customerSalary").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerName").focus();
    }

});
$('#customerSalary').on('keydown',function (event){

    if(event.key==="Enter"){
        cusSave($('#customerId').val(),$('#customerName').val(),$('#customerAddress').val(),$('#customerSalary').val());

    }else if(event.key==="ArrowUp"){
        $("#customerAddress").focus();
    }


});

/*save Customer*/
function cusSave(customerID,customerName,customerAddress,customerSalary) {

    var customer={
        cusId:customerID,
        cusName:customerName,
        cusAddress:customerAddress,
        cusSalary:customerSalary
    }

    customerAr.push(customer);
    /*Double click to remove*/

    addTable();
    dblClickDelete();




}

/*Search Customer*/
$('#btnSearchButton').click(function () {

    for (let customerKey of customerAr) {

        //check the ComboBox Id Equal
        console.log($('#cusCombo').val());

        if($('#cusCombo').val()==="ID"){
            //check Id
            // alert(customerKey.id+"=="+$('#inputCusSearch').val());

            if(customerKey.cusId===$('#inputCusSearch').val()){
                $('#cId').val(customerKey.cusId);
                $('#cName').val(customerKey.cusName);
                $('#cSalary').val(customerKey.cusSalary);
                $('#cAddress').val(customerKey.cusAddress);
            }
        }else if($('#cusCombo').val()==="1"){
            //check Name
            if(customerKey.cusName===$('#inputCusSearch').val()){
                $('#cId').val(customerKey.cusId);
                $('#cName').val(customerKey.cusName);
                $('#cSalary').val(customerKey.cusSalary);
                $('#cAddress').val(customerKey.cusAddress);
            }
        }

    }

});



/*Double Click delete*/
function dblClickDelete() {
    $("#tblCustomer>tr").dblclick(function (){
        deleteCustomer($(this).children(':eq(0)').text());
        $(this).remove();
        addTable();
    });
}


/*When the table click set data to the field*/
function trSelector() {

    $("#tblCustomer>tr").click(function (){
        let id=$(this).children(':eq(0)').text();
        let name=$(this).children(':eq(1)').text();
        let address=$(this).children(':eq(2)').text();
        let salary=$(this).children(':eq(3)').text();

        console.log(id+"  "+name+"  "+address+" "+salary);

        $('#cId').val(id);
        $('#cName').val(name);
        $('#cAddress').val(address);
        $('#cSalary').val(salary);


        /*Double click to remove*/
       /* $("#tblCustomer>tr").dblclick(function (){
            alert("meken ennee")
            deleteCustomer($(this).id);
            $(this).remove();
        });*/

    });

}

/*for Delete Customer*/
$("#btnCusDelete").click(function () {
    let delID = $("#cId").val();

    let option = confirm("Do you really want to delete customer id :" + delID);
    if (option){
        if (deleteCustomer(delID)) {
            alert("Customer Successfully Deleted..");

        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});

function searchCustomer(cusID) {
    for (let customer of customerAr) {
        if (customer.cusId == cusID) {
            return customer;
        }
    }
    return null;
}


function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);

    if (customer != null) {
        let indexNumber = customerAr.indexOf(customer);
        customerAr.splice(indexNumber, 1);
        addTable();
        return true;
    } else {
        return false;
    }
}


/*Update Customer*/
$("#btnCusUpdate").click(function () {
    let customerID = $('#cId').val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
    } else {
        alert("Update Failed..!");

    }
});

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.cusId = $("#cId").val();
        customer.cusName = $("#cName").val();
        customer.cusAddress = $("#cAddress").val();
        customer.cusSalary = $("#cSalary").val();
        addTable();
        return true;
    } else {
        return false;
    }
}