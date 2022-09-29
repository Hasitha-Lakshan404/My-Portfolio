var customer=[];

$('#btnSaveCustomer').click(function () {

    alert("nsa")
    console.log("sdasdasa");
    //cus Object
    var cusObject={
        cusId:$('#customerId').val(),
        cusName:$('#customerName').val(),
        cusAddress:$('#customerAddress').val(),
        cusSalary:$('#customerSalary').val()
    }
    customer.push(cusObject);
    console.log(customer);
});


