function dark() {
    var a = document.getElementById("click");
    var b = document.getElementsByTagName('body')[0];

    if (a.checked === true) {
        b.style.backgroundColor = "#242734";
    } else {
        // b.style.backgroundColor = "white";
        b.style.backgroundColor = '#320A48';
    }
}
