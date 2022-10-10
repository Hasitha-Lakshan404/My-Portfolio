var customerAr=[];

$('#btnSaveCustomer').click(function (event) {
    cusSave($('#customerId').val(),$('#customerName').val(),$('#customerAddress').val(),$('#customerSalary').val());

    /*let customerID=$('#customerId').val();
    let customerName=$('#customerName').val();
    let customerAddress=$('#customerAddress').val();
    let customerSalary=$('#customerSalary').val();

    var customer={
        id:customerID,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }

    customerAr.push(customer);

    addTable();*/

});

function addTable() {
    $("#tblCustomer> tr").detach();

    for (var customer of customerAr){
        var row="<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";
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
        id:customerID,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }

    customerAr.push(customer);

    addTable();
}

/*Search Customer*/
$('#btnSearchButton').click(function () {

    for (let customerKey of customerAr) {

        //check the ComboBox Id Equal
        console.log($('#cusCombo').val());

        if($('#cusCombo').val()==="ID"){
            //check Id
            alert(customerKey.id+"=="+$('#inputCusSearch').val());
            if(customerKey.id===$('#inputCusSearch').val()){
                $('#cId').val(customerKey.cusId);
                $('#cName').val(customerKey.cusName);
                $('#cSalary').val(customerKey.cusSalary);
                $('#cAddress').val(customerKey.cusAddress);
            }
        }else if($('#cusCombo').val()==="1"){
            //check Name
            if(customerKey.name===$('#inputCusSearch').val()){
                $('#cId').val(customerKey.cusId);
                $('#cName').val(customerKey.cusName);
                $('#cSalary').val(customerKey.cusSalary);
                $('#cAddress').val(customerKey.cusAddress);
            }
        }

    }

});