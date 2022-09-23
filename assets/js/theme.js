function dark() {
    var a = document.getElementById("click");
    var b = document.getElementsByTagName('body')[0];

    if (a.checked === true) {
        /*DARK THEME*/
        b.style.backgroundColor = "#242734";
        // $("#AboutMe-section").removeAttr("style");

        /*for the disable*/
        $("#lHeadStyle").attr("disabled","disabled");
        $("#lHomeStyle").attr("disabled","disabled");
        $("#lAboutStyle").attr("disabled","disabled");
        $("#lSkillStyle").attr("disabled","disabled");
        $("#lEduStyle").attr("disabled","disabled");
        $("#lProStyle").attr("disabled","disabled");
        $("#lQStyle").attr("disabled","disabled");

    } else {
        /*light THeme*/

        // $("#AboutMe-section").removeAttr("style");

        $("#dHeadStyle").attr("disabled","disabled");
        $("#dHomeStyle").attr("disabled","disabled");
        $("#dAboutStyle").attr("disabled","disabled");
        $("#dSkillStyle").attr("disabled","disabled");
        $("#dEduStyle").attr("disabled","disabled");
        $("#dProStyle").attr("disabled","disabled");
        $("#dQStyle").attr("disabled","disabled");



        // b.style.backgroundColor = "white";
        // b.style.backgroundColor = '#320A48';


        // $("#style1").attr("disabled", "disabled");
        $("#style1").removeAttr("disabled");


    }
}
