function loadAllCustomerId() {
    for (let customerArElement of customerAr) {
        $('#customerIdOrd').append(`<option>${customerArElement.cusId}</option>`)
    }
}