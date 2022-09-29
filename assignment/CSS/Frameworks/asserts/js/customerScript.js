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


    /*// get all customer records from the array
    for(var customersL of customer){
        console.log(customer);// customer object

        // add those data to the table row
        // var row= "<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";

        // Using String Literals to do the same thing as above
        var row= `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblCustomer").append(row);
    }*/
});

function setData() {

    $('#tblCustomer').empty();

    for (let customerElement of customer) {
        var row=`<tr><td>${customerElement.cusId}</td><td>${customerElement.cusName}</td><td>${customerElement.cusAddress}</td><td>${customerElement.cusSalary}</td></tr>`;
        // var rows=`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        $('#tblCustomer').append(row);
    }
}

