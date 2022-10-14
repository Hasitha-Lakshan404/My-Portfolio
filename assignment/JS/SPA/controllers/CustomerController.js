

$('#btnSaveCustomer').click(function (event) {
    cusSave($('#customerId').val(),$('#customerName').val(),$('#customerAddress').val(),$('#customerSalary').val());


});

function addCustomerTable() {
    $("#tblCustomer> tr").detach();

    for (var customer of customerAr){
        var row="<tr><td>"+customer.cusId+"</td><td>"+customer.cusName+"</td><td>"+customer.cusAddress+"</td><td>"+customer.cusSalary+"</td></tr>";
        $('#tblCustomer').append(row);
    }
    trCusSelector();
}

/*====Add Focus Event when user Click Enter====*/
$('#customerId').on('keydown',function (event){

    if(event.key==="Enter" && check(cusIDRegEx, $("#customerId"))){
        $("#customerName").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerSalary").focus();
    }

});
$('#customerName').on('keydown',function (event){

    if(event.key==="Enter" && check(cusNameRegEx, $("#customerName"))){
        $("#customerAddress").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerId").focus();
    }

});
$('#customerAddress').on('keydown',function (event){

    if(event.key==="Enter" && check(cusAddressRegEx, $("#customerAddress"))){
        $("#customerSalary").focus();
    }else if(event.key==="ArrowUp"){
        $("#customerName").focus();
    }

});
$('#customerSalary').on('keydown',function (event){

    if(event.key==="Enter" && check(cusSalaryRegEx, $("#customerSalary"))){
        let res = confirm("Do you want to add this customer.?");
        if (res) {
            cusSave($('#customerId').val(),$('#customerName').val(),$('#customerAddress').val(),$('#customerSalary').val());
        }

    }else if(event.key==="ArrowUp"){
        $("#customerAddress").focus();
    }

});

/*save Customer*/
function cusSave(customerID,customerName,customerAddress,customerSalary) {

    customerModal(customerID,customerName,customerAddress,customerSalary);

    /*Double click to remove*/

    addCustomerTable();
    dblClickCusDelete();
    loadAllCustomerId();
    clearAllCusData();
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
function dblClickCusDelete() {
    $("#tblCustomer>tr").dblclick(function (){
        deleteCustomer($(this).children(':eq(0)').text());
        $(this).remove();
        addCustomerTable();
    });
}


/*When the table click set data to the field*/
function trCusSelector() {

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



    });

}

/*for Delete Customer*/
$("#btnCusDelete").click(function () {
    let delID = $("#cId").val();

    let option = confirm("Do you really want to delete customer id :" + delID);
    if (option){
        if (deleteCustomer(delID)) {
            alert("Customer Successfully Deleted..");
            clearAllCusData();

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
        addCustomerTable();
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
        addCustomerTable();
        return true;
    } else {
        return false;
    }
}

/*Disable Tab*/
$("#customerId,#customerName,#customerAddress,#customerSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


/*For Validation*/


$("#customerId").focus();

// customer reguler expressions
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#customerId'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx, field: $('#customerName'),error:'Customer Name Pattern is Wrong : A-z 5-20'});
customerValidations.push({reg: cusAddressRegEx, field: $('#customerAddress'),error:'Customer Address Pattern is Wrong : A-z 0-9 ,/'});
customerValidations.push({reg: cusSalaryRegEx, field: $('#customerSalary'),error:'Customer Salary Pattern is Wrong : 100 or 100.00'});



$("#customerId,#customerName,#customerAddress,#customerSalary").on('keyup', function (event) {
    checkCusValidity();
});

$("#customerId,#customerName,#customerAddress,#customerSalary").on('blur', function (event) {
    checkCusValidity();
});

function checkCusValidity() {
    let errorCount=0;
    for (let validation of customerValidations) {
        if (checkCus(validation.reg,validation.field)) {
            textCusSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setCusTextError(validation.field,validation.error);
        }
    }
    setCusButtonState(errorCount);
}

function checkCus(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function textCusSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultCusText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function setCusTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultCusText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function defaultCusText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function setCusButtonState(value){
    if (value>0){
        $("#btnSaveCustomer").attr('disabled',true);
    }else{
        $("#btnSaveCustomer").attr('disabled',false);
    }
}

$("#clearCus").click(function () {
    clearAllCusData();
});

function clearAllCusData() {
    $('#customerId').val("");
    $('#customerName').val("");
    $('#customerAddress').val("");
    $('#customerSalary').val("");

    $('#cId').val("");
    $('#cName').val("");
    $('#cSalary').val("");
    $('#cAddress').val("");
}