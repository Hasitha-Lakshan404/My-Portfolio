function tempCartModal(itemCode,itmName,itmPrice,itemOrderQty,total) {
    var tempOrder={
        orItemCOde:itemCode,
        orItemName:itmName,
        orItemPrice:itmPrice,
        orItemQTY:itemOrderQty,
        orItemTotal:total
    }
    tempOrderCartAr.push(tempOrder);
}
