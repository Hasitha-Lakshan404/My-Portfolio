
function orderModal(orderId,orderDate,customerName,discount,subTotal) {
    var order={
        orId:orderId,
        orDate:orderDate,
        orCusName:customerName,
        orDis:discount,
        orSubTotal:subTotal
    }
    orders.push(order);
}

