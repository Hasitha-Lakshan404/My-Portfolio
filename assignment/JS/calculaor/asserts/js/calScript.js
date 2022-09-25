let curNo = null;
let previousNo = null;

/*========== NO 0 ===========*/
$("#calNo0").click(function () {
    console.log("0");
    // $("#calCurrentNumber").text("0");

    if (!(curNo === null || curNo === "0")) {
        curNo += "0"
        $("#calCurrentNumber").text(curNo);
    }


})


/*========== NO 1 ===========*/
$("#calNo1").click(function () {
    console.log("1");
    // $("#calCurrentNumber").text("1");

    if (curNo === null) {
        curNo = "1";
    } else {
        curNo += "1"
    }

    $("#calCurrentNumber").text(curNo);

})


/*========== NO 2 ===========*/
$("#calNo2").click(function () {
    console.log("2");
    // $("#calCurrentNumber").text("2");

    if (curNo === null) {
        curNo = "2";
    } else {
        curNo += "2"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 3 ===========*/
$("#calNo3").click(function () {
    console.log("3");
    // $("#calCurrentNumber").text("3");

    if (curNo === null) {
        curNo = "3";
    } else {
        curNo += "3"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 4 ===========*/
$("#calNo4").click(function () {
    console.log("4");
    // $("#calCurrentNumber").text("4");

    if (curNo === null) {
        curNo = "4";
    } else {
        curNo += "4"
    }

    $("#calCurrentNumber").text(curNo);

})


/*========== NO 5 ===========*/
$("#calNo5").click(function () {
    console.log("5");
    // $("#calCurrentNumber").text("5");

    if (curNo === null) {
        curNo = "5";
    } else {
        curNo += "5"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 6 ===========*/
$("#calNo6").click(function () {
    console.log("6");
    // $("#calCurrentNumber").text("6");

    if (curNo === null) {
        curNo = "6";
    } else {
        curNo += "6"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 7 ===========*/
$("#calNo7").click(function () {
    console.log("7");
    // $("#calCurrentNumber").text("7");

    if (curNo === null) {
        curNo = "7";
    } else {
        curNo += "7"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 8 ===========*/
$("#calNo8").click(function () {
    console.log("8");
    // $("#calCurrentNumber").text("8");

    if (curNo === null) {
        curNo = "8";
    } else {
        curNo += "8"
    }

    $("#calCurrentNumber").text(curNo);
})


/*========== NO 9 ===========*/
$("#calNo9").click(function () {
    console.log("9");
    // $("#calCurrentNumber").text("9");

    if (curNo === null) {
        curNo = "9";
    } else {
        curNo += "9"
    }

    $("#calCurrentNumber").text(curNo);

})

/*=====CLEAR====*/
$("#calAllClear").click(function () {
    $("#calCurrentNumber").text("0");
    curNo = null;
    $("#calPreviousNumber").text("0");
    previousNo = null;

})

/*=====FUNCTION=====*/

/*====== + ========*/
$("#calAddition").click(function () {

    if(curNo!==null){
        if (previousNo === "0" || previousNo === null) {
            $('#calPreviousNumber').text(curNo + " + ");
            previousNo = (curNo + " + ");
            clearForFunc();
        } else {
            previousNo = previousNo + (curNo + " + ");
            $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }
    }

})

/*====== -  ========*/
$("#calMinus").click(function () {
    // $("#calCurrentNumber").text("-")

    if(curNo!==null){
        if (previousNo === "0" || previousNo === null) {
            $('#calPreviousNumber').text(curNo + " - ");
            previousNo = (curNo + " - ");
            clearForFunc();
        } else {
            previousNo = previousNo + (curNo + " - ");
            $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }
    }
})

/*====== / ========*/
$("#calDivide").click(function () {
    // $("#calCurrentNumber").text("/")


})

/*====== * ========*/
$("#calMultiply").click(function () {
    // $("#calCurrentNumber").text("*")


})

/*====== ========*/
$("#calEqual").click(function () {
    // $("#calCurrentNumber").text("=")


})

/*====== . ========*/
$("#calDot").click(function () {
    // $("#calCurrentNumber").text(".")


})


/*====Methods===*/
function clearForFunc() {
    $('#calCurrentNumber').text("");
    curNo = null;
}