const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const bestPrice = document.getElementById('best-price');
const total = document.getElementById('total');

// Update total
function updateTotal() {
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const delivery = parseInt(deliveryCost.innerText);
    const best = parseInt(bestPrice.innerText);
    const totalPrice = memoryPrice + storagePrice + delivery + best;
    document.getElementById('total').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
    return totalPrice;
}

// final calculte and pomocode use
function finalTotal() {
    const pomoCode = 'stevekaku';
    const userInput = document.getElementById('pomo-input').value;
    if (pomoCode == userInput) {
        let grandTotal = updateTotal();
        grandTotal = grandTotal - (grandTotal * (20 / 100));
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    }
    document.getElementById('pomo-input').value = '';
}

// apply button
document.getElementById('apply-btn').addEventListener('click', function () {
    finalTotal();
});



// memorycost
document.getElementById('memory8gb-button').addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();

})
document.getElementById('memory16gb-button').addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();

})

// storagecost
document.getElementById('ssd256gb-button').addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();

})
document.getElementById('ssd512gb-button').addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();
})
document.getElementById('ssd1tb-button').addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal();
})

// delivery option
document.getElementById('free-delivery-button').addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal();
})
document.getElementById('charge-delivery-button').addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal();
})




