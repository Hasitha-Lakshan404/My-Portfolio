let colours=['RED','BLUE','ORANGE','YELLOW']
var timer;
$("#btnStart").click(function (){
    timer=setInterval(setColours,200);
})

let count=0;
function setColours(){
    $("#colourPlate").css('background',colours[count]);
    count++;
    if(count==4){
        count=0;
    }
}

$("#btnEnd").click(function (){

    clearTimeout(timer);
});


/*======  OR  =========*/

/*let colours=['RED','BLUE','ORANGE','YELLOW']
var bool;
$("#btnStart").click(function (){
    bool=true;
    setInterval(setColours,200);
})

let count=0;
function setColours(){
    if(bool){
        $("#colourPlate").css('background',colours[count]);
        count++;
        if(count==4){
            count=0;
        }
    }
}

$("#btnEnd").click(function (){
    bool=false;
});*/
