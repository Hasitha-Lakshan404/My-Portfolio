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

