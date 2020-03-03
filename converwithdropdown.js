const Currencies = {
    VND: {
        VND: 1,
        USD: 0.000043,
        KRW: 0.052,
        IDR: 0.613987,
        EUR: 0.0000386712
    },
    USD: {
        VND: 23208,
        USD: 1,
        KRW: 1192,
        IDR: 14305.71,
        EUR: 0.898828
    },
    KRW: {
        VND: 19.47,
        USD: 0.00084,
        KRW: 1,
        IDR: 12.0066,
        EUR: 0.000754363
    },
    IDR: {
        VND: 1.62496,
        USD: 0.0000699897,
        KRW: 0.0834650,
        IDR: 1,
        EUR: 0.0000629036
    },
    EUR: {
        VND: 25858.71,
        USD: 1.11225,
        KRW: 1325.56,
        IDR: 15935.54,
        EUR: 1
    }
};
let resultAreaConvert = document.getElementById('result-convert')
let buttonConvert = document.getElementById('btn-convert')


function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

function exchangeCurrency() {
    let inputCurrency = document.getElementById('inputcurrencys').value
    let outputCurrency = document.getElementById('outputcurrencys').value
    return Currencies[inputCurrency][outputCurrency]
}

function convertResult() {
    let outputCurrency = document.getElementById('outputcurrencys').value
    let exchange = exchangeCurrency()
    let amount = document.getElementById('amount-currency').value
    let result = exchange * amount
    result = formatCurrency(outputCurrency, result)
    return resultAreaConvert.innerHTML = `Exchange is: ${result}`
}

buttonConvert.addEventListener('click', convertResult)