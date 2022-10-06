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
        $("#dImgStyle").removeAttr("disabled");

        /*for the disable light Theme*/
        $("#lHeadStyle").attr("disabled","disabled");
        $("#lHomeStyle").attr("disabled","disabled");
        $("#lAboutStyle").attr("disabled","disabled");
        $("#lSkillStyle").attr("disabled","disabled");
        $("#lEduStyle").attr("disabled","disabled");
        $("#lProStyle").attr("disabled","disabled");
        $("#lQStyle").attr("disabled","disabled");
        $("#lImgStyle").attr("disabled","disabled");

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
        $("#lImgStyle").removeAttr("disabled");

        /*For the Disable Dark Theme*/
        // $("#dHeadStyle").attr("disabled","disabled");
        // $("#dHomeStyle").attr("disabled","disabled");
        // $("#dAboutStyle").attr("disabled","disabled");
        // $("#dSkillStyle").attr("disabled","disabled");
        // $("#dEduStyle").attr("disabled","disabled");
        // $("#dProStyle").attr("disabled","disabled");
        // $("#dQStyle").attr("disabled","disabled");
        // $("#dImgStyle").attr("disabled","disabled");

        b.style.backgroundColor = "#E7EBF8";
        // b.style.backgroundColor = '#320A48';



    }
}


//for the Cursor
$(document).mousemove(function(event) {
    // currentMousePos.x = event.pageX;
    // currentMousePos.y = event.pageY;
    console.log(event.pageY+"----"+event.pageX);

    $('#mainCircle').css({
        'top':event.pageY-20,
        'left':event.pageX-20
    });

});


//for the Loading Window
$(window).on('load',function () {
    // $('#loadingContainer').fadeOut(1000);

        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6311aa7f54f06e12d8924ec1/1gbug40vk';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

})