
$("#itemId").focus();

$('#btnItemSave').click(function (event) {
      itemSave($('#itemId').val(),$('#itemName').val(),$('#itemQtyOnHand').val(),$('#itemPrice').val());

});

function addTable() {
    $("#tblItem> tr").detach();

    for (var itm of itemAr){
        var row="<tr><td>"+itm.itemCode+"</td><td>"+itm.itemName+"</td><td>"+itm.qtyOnHand+"</td><td>"+itm.itemPrice+"</td></tr>";
        $('#tblItem').append(row);
    }
    trSelector();

}

/*====Add Focus Event when user Click Enter====*/
$('#itemId').on('keydown',function (event){

    if(event.key==="Enter" && check(itemCodeRegEx, $("#itemId"))){
        $("#itemName").focus();
    }else if(event.key==="ArrowUp"){
        $("#itemPrice").focus();
    }

});
$('#itemName').on('keydown',function (event){

    if(event.key==="Enter" && check(itemNameRegEx, $("#itemName"))){
        $("#itemPrice").focus();
    }else if(event.key==="ArrowUp"){
        $("#itemId").focus();
    }

});

$('#itemPrice').on('keydown',function (event){
    if(event.key==="Enter" && check(itemPriceRegEx, $("#itemPrice"))){
        $("#itemQtyOnHand").focus();
    }else if(event.key==="ArrowUp"){
        $("#itemName").focus();
    }

});

$('#itemQtyOnHand').on('keydown',function (event){

    if(event.key==="Enter" && check(itemQtyRegEx, $("#itemQtyOnHand"))){
        let res = confirm("Do you want to add this Item.?");
        if (res) {
            itemSave($('#itemId').val(),$('#itemName').val(),$('#itemQtyOnHand').val(),$('#itemPrice').val());
            console.log($('#itemId').val(),$('#itemName').val(),$('#itemQtyOnHand').val(),$('#itemPrice').val())
        }
    }else if(event.key==="ArrowUp"){
        $("#itemPrice").focus();
    }


});

/*save Item*/
function itemSave(itmCode,itemName,qtOHand,itPrice) {

    itemModal(itmCode,itemName,qtOHand,itPrice);
    /*Double click to remove*/

    addTable();
    dblClickDelete();
    loadAllItemId();
    clearAllItemData();
}

/*Search Item*/
$('#btnItemSearch').click(function () {

    for (let itemKey of itemAr) {

        //check the ComboBox Id Equal
        console.log($('#itemCombo').val());

        if($('#itemCombo').val()==="ID"){
           console.log("ide eke"+itemKey.itemCode +" = "+$('#inputItemSearch').val());
            if(itemKey.itemCode===$('#inputItemSearch').val()){
                $('#itId').val(itemKey.itemCode);
                $('#itName').val(itemKey.itemName);
                $('#qtyOnHand').val(itemKey.qtyOnHand);
                $('#itPrice').val(itemKey.itemPrice);
            }
        }else if($('#itemCombo').val()==="1"){
            //check Name
            if(itemKey.itemName===$('#inputItemSearch').val()){
                $('#itId').val(itemKey.itemCode);
                $('#itName').val(itemKey.itemName);
                $('#qtyOnHand').val(itemKey.qtyOnHand);
                $('#itPrice').val(itemKey.itemPrice);
            }
        }

    }

});


/*Double Click delete*/
function dblClickDelete() {
    $("#tblItem>tr").dblclick(function (){
        deleteItem($(this).children(':eq(0)').text());
        $(this).remove();
        addTable();
    });
}


/*When the table click set data to the field*/
function trSelector() {

    $("#tblItem>tr").click(function (){
        let code=$(this).children(':eq(0)').text();
        let name=$(this).children(':eq(1)').text();
        let qOH=$(this).children(':eq(2)').text();
        let price=$(this).children(':eq(3)').text();


        $('#itId').val(code);
        $('#itName').val(name);
        $('#qtyOnHand').val(qOH);
        $('#itPrice').val(price);

    });

}

/*for Delete Item*/
$("#btnItemDelete").click(function () {
    let delID = $("#itId").val();

    let option = confirm("Do you really want to delete Item  :" + delID);
    if (option){
        if (deleteItem(delID)) {
            alert("Item Successfully Deleted..");
            clearAllItemData();
        } else {
            alert("No such Item to delete. please check the Code");
        }
    }
});

function searchItem(itemId) {
    for (let item of itemAr) {
        if (item.itemCode == itemId) {
            return item;
        }
    }
    return null;
}

function deleteItem(itemID) {
    let item = searchItem(itemID);

    if (item != null) {
        let indexNumber = itemAr.indexOf(item);
        itemAr.splice(indexNumber, 1);
        addTable();

        return true;
    } else {
        return false;
    }
}


/*Update Item*/
$("#btnItemUpdate").click(function () {
    let itemID = $('#itId').val();
    let response = updateItem(itemID);
    if (response) {
        alert("Item Updated Successfully");
    } else {
        alert("Update Failed..!");

    }
});

function updateItem(itemsID) {
    let items = searchItem(itemsID);
    if (items != null) {
        items.itemCode = $("#itId").val();
        items.itemName = $("#itName").val();
        items.qtyOnHand = $("#qtyOnHand").val();
        items.itemPrice = $("#itPrice").val();
        addTable();
        return true;
    } else {
        return false;
    }
}

/*Disable Tab*/
$("#itemId,#itemName,#itemPrice,#itemQtyOnHand").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


/*For Validation*/

// Item reguler expressions

const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const itemQtyRegEx = /^[0-9]{1,7}$/;
const itemPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;


let itemValidations = [];
itemValidations.push({reg: itemCodeRegEx, field: $('#itemId'),error:'Item Code Pattern is Wrong : I00-001'});
itemValidations.push({reg: itemNameRegEx, field: $('#itemName'),error:'Item Name Pattern is Wrong : A-z 5-20'});
itemValidations.push({reg: itemQtyRegEx, field: $('#itemPrice'),error:'Item Price Pattern is Wrong : 100 or 100.00'});
itemValidations.push({reg: itemPriceRegEx, field: $('#itemQtyOnHand'),error:'QTY Pattern is Wrong : 0-9'});


$("#itemId,#itemName,#itemPrice,#itemQtyOnHand").on('keyup', function (event) {
    checkValidity();
});
$("#itemId,#itemName,#itemPrice,#itemQtyOnHand").on('blur', function (event) {
    checkValidity();
});



function checkValidity() {
    let errorCount=0;
    for (let validation of itemValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function setButtonState(value){
    if (value>0){
        $("#btnItemSave").attr('disabled',true);
    }else{
        $("#btnItemSave").attr('disabled',false);
    }
}

/*Clear Data*/
$("#btnItemClear").click(function () {
    clearAllItemData();
});

function clearAllItemData() {
    $('#itId').val("");
    $('#itName').val("");
    $('#qtyOnHand').val("");
    $('#itPrice').val("");

    $('#itemId').val("");
    $('#itemName').val("");
    $('#itemPrice').val("");
    $('#itemQtyOnHand').val("");
}