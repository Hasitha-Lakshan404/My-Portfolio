
$('#btnDash').click(function (){
    $('#dashboardPage').css('display','block');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','none');
});

$('#btnOrder').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','block');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','none');
});

$('#btnItem').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','block');
    $('#customerPage').css('display','none');
});

$('#btnCustomer').click(function (){
    $('#dashboardPage').css('display','none');
    $('#orderPage').css('display','none');
    $('#itemPage').css('display','none');
    $('#customerPage').css('display','block');
});
