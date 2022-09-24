function dark() {
    var a = document.getElementById("click");
    var b = document.getElementsByTagName('body')[0];

    if (a.checked === true) {
        /*DARK THEME*/
        b.style.backgroundColor = "#242734";

        /*Enable Dark Theme*/
        $("#dHeadStyle").removeAttr("disabled");
        $("#dHomeStyle").removeAttr("disabled");
        $("#dAboutStyle").removeAttr("disabled");
        $("#dSkillStyle").removeAttr("disabled");
        $("#dEduStyle").removeAttr("disabled");
        $("#dProStyle").removeAttr("disabled");
        $("#dQStyle").removeAttr("disabled");

        /*for the disable light Theme*/
        $("#lHeadStyle").attr("disabled","disabled");
        $("#lHomeStyle").attr("disabled","disabled");
        $("#lAboutStyle").attr("disabled","disabled");
        $("#lSkillStyle").attr("disabled","disabled");
        $("#lEduStyle").attr("disabled","disabled");
        $("#lProStyle").attr("disabled","disabled");
        $("#lQStyle").attr("disabled","disabled");

    } else {
        /*light THeme*/

        /*Enable Light Theme*/
        $("#lHeadStyle").removeAttr("disabled");
        $("#lHomeStyle").removeAttr("disabled");
        $("#lAboutStyle").removeAttr("disabled");
        $("#lSkillStyle").removeAttr("disabled");
        $("#lEduStyle").removeAttr("disabled");
        $("#lProStyle").removeAttr("disabled");
        $("#lQStyle").removeAttr("disabled");

        /*For the Disable Dark Theme*/
        // $("#dHeadStyle").attr("disabled","disabled");
        // $("#dHomeStyle").attr("disabled","disabled");
        // $("#dAboutStyle").attr("disabled","disabled");
        // $("#dSkillStyle").attr("disabled","disabled");
        // $("#dEduStyle").attr("disabled","disabled");
        // $("#dProStyle").attr("disabled","disabled");
        // $("#dQStyle").attr("disabled","disabled");


        b.style.backgroundColor = "white";
        // b.style.backgroundColor = '#320A48';



    }
}
