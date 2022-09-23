function dark() {
    var a = document.getElementById("click");
    var b = document.getElementsByTagName('body')[0];

    if (a.checked === true) {
        b.style.backgroundColor = "#242734";
        // $("#AboutMe-section").removeAttr("style");


        /*for the disable*/
        $("#style1").attr("disabled", "disabled");

    } else {
        /*light THeme*/

        // $("#AboutMe-section").removeAttr("style");




        // b.style.backgroundColor = "white";
        b.style.backgroundColor = '#320A48';


        // $("#style1").attr("disabled", "disabled");
        $("#style1").removeAttr("disabled");


    }
}
