var item=[];


$('#itemSaveButton').click(function () {
    
    let itemCode=$("#item-code").val();
    let itemName =$('#item-name').val();
    let itemPrice =$('#item-Price').val();
    let itemQty =$('#item-qty').val();
    
    var itemObject= {
        itCode:itemCode,
        itName:itemName,
        itQty:itemQty,
        itPrice:itemPrice,

    }

    item.push(itemObject);
    console.log(item);

    setItemData();
    cusClear();
});

function setItemData() {
    $('#tblItem').empty();

    for (let itemElement of item) {
        var row=`<tr><td>${itemElement.itCode}</td><td>${itemElement.itName}</td><td>${itemElement.itPrice}</td><td>${itemElement.itQty}</td></tr>`;

        $('#tblItem').append(row);
    }
}

function cusClear() {
    $("#item-code").val("");
    $('#item-name').val("");
    $('#item-Price').val("");
    $('#item-qty').val("");
}

$('#btnItemSearchButton').click(function () {


    for (let itemKey of item) {

        //check the ComboBox Id Equal
        if($('#itemCombo').val()==="ID"){
            //check Id
            console.log(itemKey.itCode +"=="+$('#inputItemSearch').val());
            if(itemKey.itCode===$('#inputItemSearch').val()){
                $('#itemId').val(itemKey.itCode);
                $('#itemName').val(itemKey.itName);
                $('#price').val(itemKey.itPrice);
                $('#qtyOnHand').val(itemKey.itQty);
            }
        }else if($('#itemCombo').val()==="1"){
            //check Name
            if(itemKey.cusName===$('#inputCusSearch').val()){
                $('#itemId').val(itemKey.itCode);
                $('#itemName').val(itemKey.itName);
                $('#price').val(itemKey.itPrice);
                $('#qtyOnHand').val(itemKey.itQty);
            }
        }

    }


})