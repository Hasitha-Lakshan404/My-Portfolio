
$('#btnDash').click(function (){
    $('#dashboardPage').css('display','block');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','none');

    $('#btnDash').css({"font-weight": "bold"});
    $('#btnOrder').css({"font-weight": "normal"});
    $('#btnItem').css({"font-weight": "normal"});
    $('#btnCustomer').css({"font-weight": "normal"});
});

$('#btnOrder').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','block');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','none');

    $('#btnDash').css({"font-weight": "normal"});
    $('#btnOrder').css({"font-weight": "bold"});
    $('#btnItem').css({"font-weight": "normal"});
    $('#btnCustomer').css({"font-weight": "normal"});
});

$('#btnItem').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','block');
    $('#customerPage').css('display','none');

    $('#btnDash').css({"font-weight": "normal"});
    $('#btnOrder').css({"font-weight": "normal"});
    $('#btnItem').css({"font-weight": "bold"});
    $('#btnCustomer').css({"font-weight": "normal"});
});

$('#btnCustomer').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','block');

    $('#btnDash').css({"font-weight": "normal"});
    $('#btnOrder').css({"font-weight": "normal"});
    $('#btnItem').css({"font-weight": "normal"});
    $('#btnCustomer').css({"font-weight": "bold"});
});
