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

        /*$("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "../styleSheet/lightTheme/lightAbout.css"
        }).appendTo("body");*/



        // $("#AboutMe-section").removeAttr("style");




        // b.style.backgroundColor = "white";
        b.style.backgroundColor = '#320A48';


        // $("#style1").attr("disabled", "disabled");
        $("#style1").removeAttr("disabled");


       /* $(document).ready(function () {
            $('#AboutMe-section').css({"border":"5px solid black"});
            $('<style type="text/css"></style>')
                .html('@import url("../../styleSheet/lightTheme/lightAbout.css")');
        });*/
    }
}
