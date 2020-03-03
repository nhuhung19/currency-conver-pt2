let radiosInput = document.getElementsByName('inputcurrency')
let amount = document.getElementById('amount')
let btnConvert = document.getElementById('convertButton')
let resultArea = document.getElementById('resultArea')
let radiosOutput = document.getElementsByName('outputcurrency')
let currencyUsd = 23262;
let currencyEuro = 25818;
let inputCurrency
let outputcurrency
let currencyConvert

function usdToVnd(amount) {
    let result = (amount * currencyUsd).toFixed(2)
    return resultArea.innerHTML = `${amount} dollar is same as ${result} vnd`
}

function euroToVnd(amount) {
    let result = (amount * currencyEuro).toFixed(2)
    return resultArea.innerHTML = `${amount} euro is same as ${result} vnd`
}

function euroTousd(amount) {
    let result = (amount * (currencyEuro / currencyUsd)).toFixed(2)
    return resultArea.innerHTML = `${amount} euro is same as ${result} usd`
}

function usdToEuro(amount) {
    let result = (amount * (currencyUsd / currencyEuro)).toFixed(2)
    return resultArea.innerHTML = `${amount} usd is same as ${result} euro`
}

function vndToUsd(amount) {
    let result = (amount / currencyUsd).toFixed(2)
    return resultArea.innerHTML = `${amount} vnd is same as ${result} usd`
}

function vndToEuro(amount) {
    let result = (amount / currencyEuro).toFixed(2)
    return resultArea.innerHTML = `${amount} vnd is same as ${result} euro`
}

function checkType() {
    for (let i = 0; i < radiosInput.length; i++) {
        if (radiosInput[i].checked) {
            inputCurrency = radiosInput[i].value
            break;
        }
    }

    for (let i = 0; i < radiosOutput.length; i++) {
        if (radiosOutput[i].checked) {
            outputcurrency = radiosOutput[i].value
            break;
        }
    }

    currencyConvert = inputCurrency + outputcurrency

    if (currencyConvert === 'USDVND') {
        usdToVnd(amount.value)
    } else if (currencyConvert === 'EUROVND') {
        euroToVnd(amount.value)
    } else if (currencyConvert === 'EUROUSD') {
        euroTousd(amount.value)
    } else if (currencyConvert === 'USDEURO') {
        usdToEuro(amount.value)
    } else if (currencyConvert === 'VNDUSD') {
        vndToUsd(amount.value)
    } else if (currencyConvert === 'VNDEURO') {
        vndToEuro(amount.value)
    }
}

btnConvert.addEventListener('click', checkType)