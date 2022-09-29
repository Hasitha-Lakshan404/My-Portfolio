var item=[];


$('#itemSaveButton').click(function () {
    
    let itemCode=$("#item-code").val();
    let itemName =$('#item-name').val();
    let itemPrice =$('#item-Price').val();
    let itemQty =$('#item-qty').val();
    
    var itemObject= {
        itCode:itemCode,
        itName:itemName,
        itPrice:itemPrice,
        itQty:itemQty
    }

    item.push(itemObject);
    console.log(item);

    setItemData();
});

function setItemData() {
    $('#tblItem').empty();

    for (let itemElement of item) {
        var row=`<tr><td>${itemElement.itCode}</td><td>${itemElement.itName}</td><td>${itemElement.itPrice}</td><td>${itemElement.itQty}</td></tr>`;

        $('#tblItem').append(row);
    }
}

