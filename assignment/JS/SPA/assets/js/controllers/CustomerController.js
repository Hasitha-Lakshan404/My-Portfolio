var cusAr=[];

$('#btnSaveCustomer').click(function (event) {

    let customerID=$('#customerId').val();
    let customerName=$('#customerName').val();
    let customerAddress=$('#customerAddress').val();
    let customerSalary=$('#customerSalary').val();

    var customer={
        id:customerID,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }

    cusAr.push(customer);

    addTable();

});

function addTable() {
    $("#tblCustomer> tr").detach();

    for (var customer of cusAr){
        var row="<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";
        $('#tblCustomer').append(row);
    }
    trSelector();

}