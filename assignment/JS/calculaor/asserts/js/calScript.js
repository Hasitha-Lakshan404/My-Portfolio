let curNo = null;
let previousNo = null;
let answer = null;
let previousNoArray = [];

/*========== NO 0 ===========*/
$("#calNo0").click(function () {
    // console.log("0");
    // $("#calCurrentNumber").text("0");

    if (!(curNo === null || curNo === "0")) {
        curNo += "0"
        $("#calCurrentNumber").text(curNo);
    }


})


/*========== NO 1 ===========*/
$("#calNo1").click(function () {
    // console.log("1");
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
    // console.log("2");
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
    // console.log("3");
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
    // console.log("4");
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
    // console.log("5");
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
    // console.log("6");
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
    // console.log("7");
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
    // console.log("8");
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
    // console.log("9");
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
    answer = null;
})

/*=====FUNCTION=====*/

/*====== + ========*/
let addCount = 0;
let prn = null;
let countAddBtnClick = 0;
$("#calAddition").click(function () {
    countAddBtnClick++;
    let typedText = $('#calCurrentNumber').text();


    /*for (let previousNoArrayElement of previousNoArray) {
        prn+=previousNoArrayElement;
        console.log(previousNoArrayElement);
        $('#calPreviousNumber').text(prn);
    }*/


    /*check The current No is NOt Null*/
    if (curNo !== null) {

        previousNoArray.push(curNo);
        previousNoArray.push(" + ");
        clearForFunc();


        /*if (previousNo === "0" || previousNo === null) {
            // $('#calPreviousNumber').text(curNo + " + ");

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" + ");

            previousNo = (curNo + " + ");
            clearForFunc();
        } else {
            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" + ");

            previousNo = previousNo + (curNo + " + ");
            // $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }*/

        /*Split and Get get no to the array without + */

        // let preNo = previousNo.split(" + ");
        //
        // /*if this is first time*/
        // if(addCount<1){
        //     /*if this is first time*/
        //     if(preNo.length>2){
        //         answer=parseFloat(preNo[0])+parseFloat(preNo[1]);
        //         let ansStr=answer.toString();
        //         $('#calCurrentNumber').text(answer.toString());
        //         addCount=1;
        //     }
        // }else{ //if this Second or higher time
        //     answer+=parseFloat(typedText);
        //     $('#calCurrentNumber').text(answer.toString());
        // }

        //if it's loop only array have or more than two values


        //for the display previous number
        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }

    }

    //for change the Operator when btn click
    if (countAddBtnClick > 2) {
        previousNoArray[previousNoArray.length - 1] = " + ";
        prn = '';
        for (let i = 0; i < previousNoArray.length; i++) {
            prn = prn + previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }
})


/*===================METHOD==================*/

let clickCount = 0;
let newAns = null;

function allCalc() {
    let tempAns = null;
    let anotherValues = 0;

    if (clickCount === 0) { //for first two Number
        let no1 = previousNoArray[0];
        let no2 = previousNoArray[2];
        let operator = previousNoArray[1];

        // console.log("no 1-"+no1+" no2-"+no2+" operator-"+operator);

        /*========Search Operator=======*/
        if (operator === " + ") {
            tempAns = parseFloat(no1) + parseFloat(no2);
        } else if (operator === " - ") {
            tempAns = parseFloat(no1) - parseFloat(no2);
        } else if (operator === " / ") {
            tempAns = parseFloat(no1) / parseFloat(no2);
        } else if (operator === " * ") {
            tempAns = parseFloat(no1) * parseFloat(no2);
        }
        newAns = tempAns;

        clickCount = 1;
    }

    //iterate and get all values of the array

    console.log("newAns" + newAns);
    let tempNewAns = 0;

    let checkFTime = 0;
    for (let i = 3; i < previousNoArray.length; i++) {
        // console.log("Array values "+previousNoArray[i]);

        if (i < previousNoArray.length - 2) {
            //Search Operators in the array
            if (previousNoArray[i] === " + ") {
                // console.log("new Ans->"+newAns+"  want to added =>"+previousNoArray[i+1]);

                //first time (need to added newAns only one time)
                if (checkFTime === 0) {
                    tempNewAns = newAns + parseFloat(previousNoArray[i + 1]);
                    checkFTime = 1;

                } else { //after that want to loop the answer and array value.
                    tempNewAns = tempNewAns + parseFloat(previousNoArray[i + 1]);
                }

            } else if (previousNoArray[i] === " - ") {
                //first time (need to added newAns only one time)
                if (checkFTime === 0) {
                    tempNewAns = newAns - parseFloat(previousNoArray[i + 1]);
                    checkFTime = 1;

                } else { //after that want to loop the answer and array value.
                    tempNewAns = tempNewAns - parseFloat(previousNoArray[i + 1]);
                }
            } else if (previousNoArray[i] === " / ") {

            } else if (previousNoArray[i] === " * ") {

            }
        }
        // console.log("else ekee I="+i+" -> "+previousNoArray[i]);

    }

    if (checkFTime === 1) {
        $('#calCurrentNumber').text(tempNewAns.toString());
    } else {
        $('#calCurrentNumber').text(newAns.toString());
    }

    console.log("TempNewAns " + tempNewAns);
    console.log("======================");
    // newAns=newAns+anotherValues;

    // console.log("temp ans="+newAns);
    // newAns=tempAns;

}


let minusCount = 0;
/*====== -  ========*/

let minCount = 0;
let prnMin = null;
let countMinBtnClick = 0;
$("#calMinus").click(function () {
    countMinBtnClick++;
    let typedText = $('#calCurrentNumber').text();

    if (curNo !== null) {
        previousNoArray.push(curNo);
        previousNoArray.push(" - ");
        clearForFunc();
        /*if (previousNo === "0" || previousNo === null) {
            $('#calPreviousNumber').text(curNo + " - ");

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" - ");

            previousNo = (curNo + " - ");
            clearForFunc();
        } else {

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" - ");

            previousNo = previousNo + (curNo + " - ");
            $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }

        /!*Split and Get get no to the array without + *!/

        let preNo = previousNo.split(" - ");

        /!*if this is first time*!/
        if(minusCount<1){
            /!*if this is first time*!/
            if(preNo.length>2){
                answer=parseFloat(preNo[0])-parseFloat(preNo[1]);
                let ansStr=answer.toString();
                $('#calCurrentNumber').text(answer.toString());
                minusCount=1;
            }
        }else{ //if this Second or higher time

            if(answer!==null){ //Check answer null cuz set value for after the clear answer's value
                answer-=parseFloat(typedText);
                $('#calCurrentNumber').text(answer.toString());

            }else{
                //come to this ,
                    //Added value and subtract values Continuously and After the first clear.comes to this.

                answer=typedText; //ignore answer  text and assign typed value.
                $('#calCurrentNumber').text(answer.toString());
            }
        }*/

        //for the display previous number
        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }

    }

    //for change the Operator when btn click
    if (countMinBtnClick > 2) {
        console.log("Changed sum + to -")
        previousNoArray[previousNoArray.length - 1] = " - ";
        console.log("What is Last Index "+previousNoArray[previousNoArray.length-1]);
        prn = '';
        for (let i = 0; i < previousNoArray.length; i++) {
            prn = prn + previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }
})

/*====== / ========*/
let divideCount = 0;
$("#calDivide").click(function () {
    let typedText = $('#calCurrentNumber').text();


    if (curNo !== null) {
        if (previousNo === "0" || previousNo === null) {
            $('#calPreviousNumber').text(curNo + " / ");

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" / ");

            previousNo = (curNo + " / ");
            clearForFunc();
        } else {

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" / ");

            previousNo = previousNo + (curNo + " / ");
            $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }

        /*Split and Get get no to the array without + */

        let preNo = previousNo.split(" / ");

        /*if this is first time*/
        if (divideCount < 1) {
            /*if this is first time*/
            if (preNo.length > 2) {
                answer = (parseFloat(preNo[0]) / parseFloat(preNo[1])).toFixed(2);
                let ansStr = answer.toString();
                $('#calCurrentNumber').text(answer.toString());
                divideCount = 1;
            }
        } else { //if this Second or higher time

            if (answer !== null) { //Check answer null cuz set value for after the clear answer's value
                answer /= parseFloat(typedText).toFixed(2);
                $('#calCurrentNumber').text((answer.toFixed(2)).toString());

            } else {
                //come to this ,
                //Added value and Dived values Continuously and After the first clear.comes to this.

                answer = typedText; //ignore answer  text and assign typed value.
                $('#calCurrentNumber').text(answer.toString());
            }
        }
    }

})


/*====== * ========*/
let multiCount = 0;
$("#calMultiply").click(function () {
    let typedText = $('#calCurrentNumber').text();

    if (curNo !== null) {
        if (previousNo === "0" || previousNo === null) {
            $('#calPreviousNumber').text(curNo + " * ");

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" * ");

            previousNo = (curNo + " * ");
            clearForFunc();
        } else {

            //Previous No Array
            previousNoArray.push(curNo);
            previousNoArray.push(" * ");

            previousNo = previousNo + (curNo + " * ");
            $('#calPreviousNumber').text(previousNo);
            clearForFunc();
        }
    }


    /*Split and Get get no to the array without * */

    let preNo = previousNo.split(" * ");

    /*if this is first time*/
    if (multiCount < 1) {
        /*if this is first time*/
        if (preNo.length > 2) {
            answer = parseFloat(preNo[0]) * parseFloat(preNo[1]);
            let ansStr = answer.toString();
            $('#calCurrentNumber').text(answer.toString());
            multiCount = 1;
        }
    } else { //if this Second or higher time

        if (answer !== null) { //Check answer null cuz set value for after the clear answer's value
            answer *= parseFloat(typedText);
            $('#calCurrentNumber').text(answer.toString());

        } else {
            //come to this ,
            //Added value and multiply values Continuously and After the first clear.comes to this.

            answer = typedText; //ignore answer  text and assign typed value.
            $('#calCurrentNumber').text(answer.toString());
        }
    }

})

/*====== = =======*/
$("#calEqual").click(function () {
    let typedText = $('#calCurrentNumber').text();

    /*catch the two value*/
    if (answer === null) {
        // let preNo = previousNo.split(" * ");
        // alert("operator "+previousNo.length);
        // alert("operator index "+(parseInt(previousNo.length)-2));

        /*get Operator*/
        let operator = previousNo.charAt(parseInt(previousNo.length) - 2);

        /*get Before No using Operator*/
        let preNo = previousNo.split(" " + operator + " ");
        let firstNo = preNo[0];
        eqLogic(firstNo, typedText, operator);
        $('#calCurrentNumber').text(answer);

    } else {
        $('#calCurrentNumber').text(answer);
    }


    curNo = null;
    $("#calPreviousNumber").text("0");
    previousNo = null;
    answer = null;

})

function eqLogic(no1, no2, operator) {
    if (operator === "+") {
        answer = parseFloat(no1) + parseFloat(no2);
    } else if (operator === "-") {
        answer = parseFloat(no1) - parseFloat(no2);
    } else if (operator === "/") {
        answer = parseFloat(no1) / parseFloat(no2);
    } else if (operator === "*") {
        answer = parseFloat(no1) * parseFloat(no2);
    }

}

/*====== . ========*/
$("#calDot").click(function () {
    // $("#calCurrentNumber").text(".")

    let tempCurrentIndex = $('#calCurrentNumber').text();

    /*Search . is in the Word*/
    if (!tempCurrentIndex.includes('.')) {
        if (curNo !== null) {
            curNo += ".";
            $("#calCurrentNumber").text(curNo);
        } else {
            curNo = "0.";
            $("#calCurrentNumber").text(curNo);
        }
    }
})


/*====Methods===*/
function clearForFunc() {
    $('#calCurrentNumber').text("");
    curNo = null;
}