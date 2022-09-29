var customer=[];

$('#btnSaveCustomer').click(function () {


    let customerID = $("#customerId").val();
    let customerName = $("#customerName").val();
    let customerAddress = $("#customerAddress").val();
    let customerSalary = $("#customerSalary").val();

    //cus Object
    var cusObject={
        cusId:customerID,
        cusName:customerName,
        cusAddress:customerAddress,
        cusSalary:customerSalary
    }

    customer.push(cusObject);
    setData();


});

function setData() {
    $('#tblCustomer').empty();

    for (let customerElement of customer) {
        var row=`<tr><td>${customerElement.cusId}</td><td>${customerElement.cusName}</td><td>${customerElement.cusAddress}</td><td>${customerElement.cusSalary}</td></tr>`;

        $('#tblCustomer').append(row);
    }
}

