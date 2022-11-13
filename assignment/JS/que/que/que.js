var queData={
    person:[
        {name:"Kusal",color:"red"},
        {name:"Nimal",color:"PINK"},
        {name:"Piyal",color:"Orange"}
    ]
}

renderDivs();
function renderDivs(){
    $("#container").empty();
    for (let i = 0; i < queData.person.length; i++) {
        $("#container").append(`<div style="background-color: ${queData.person[i].color}"><h1>${queData.person[i].name}</h1></div>`);
    }
    nxtPer();
}

function nxtPer() {
    var lastPerson= queData.person.pop();
    queData.person.unshift(lastPerson);
}

setInterval(renderDivs,500);

$("#btnQue").click(function () {
    let inputName=$("#txtName").val();
    let selectedColor=$("#txtColor").val();

    var person={name:inputName,color:selectedColor};
    queData.person.unshift(person);

})
