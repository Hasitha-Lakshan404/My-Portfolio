var item=[];


$('#itemSaveButton').click(function () {
    
    let itemCode=$("#item-code");
    let itemName =$('#item-name');
    let itemPrice =$('#item-Price');
    let itemQty =$('#item-qty');
    
    var itemObject= {
        itCode:itemCode,
        itName:itemPrice,
        itPrice:itemPrice,
        itQty:itemQty
    }

    item.push(itemObject);

    setItemData();
});

function setItemData() {
    $('#tblItem').empty();

    for (let itemElement of item) {
        var row=`<tr><td>${itemElement.itCode}</td><td>${itemElement.itName}</td><td>${itemElement.itPrice}</td><td>${itemElement.itQty}</td></tr>`;

        $('#tblItem').append(row);
    }
}

