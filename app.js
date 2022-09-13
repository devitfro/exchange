function calculate() {
    let txtBitcoinPrice = document.getElementById('txt-price');
    let bitcoinPrice = txtBitcoinPrice.value;
    if (!bitcoinPrice) {
        alert('Please, provide price!');
        return;
    }

    let txtUserMoney = document.getElementById('txt-user-money');
    let userMoney = txtUserMoney.value;
    if (!userMoney) {
        alert('Please, provide money!');
        return;
    }

    let result = userMoney / bitcoinPrice;
    let txtResult = document.getElementById('txt-result');
    txtResult.value = `${result} BTC`;
}

function reset() {
    let txtBitcoinPrice = document.getElementById('txt-price');
    txtBitcoinPrice.value = null;

    let txtUserMoney = document.getElementById('txt-user-money');
    txtUserMoney.value = null;

    let txtResult = document.getElementById('txt-result');
    txtResult.value = '';
}