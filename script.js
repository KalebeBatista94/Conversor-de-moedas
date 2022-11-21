const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const dolar = 5.3;
const euro = 5.4;
const bitcoin = 85746.19;
const libra = 6.28;

const convertValues = () => {
    const input = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const dolarValueText = document.getElementById('dolar-value-text');

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' //nome da moeda
    }).format(input);

    if (select.value === 'US$ Dólar americano') {
        dolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input / dolar);
    }

    if (select.value === '€ Euro') {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(input / euro);
    }

    if (select.value === '₿ Bitcoin') {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC', minimumFractionDigits: 8
        }).format(input / bitcoin);
    }

    if (select.value === '£ Libra'){
        dolarValueText.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP',
        }).format(input / libra);
    }    
};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img');

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "US$ Dólar americano";
        currencyImg.src = './assets/eua.svg';
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "€ Euro";
        currencyImg.src = './assets/euro.svg';
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "₿ Bitcoin";
        currencyImg.src = './assets/bitcoin.png';
        currencyImg.style.width = '45px';
    }
    if (select.value === '£ Libra') {
        currencyName.innerHTML = "£ Libra";
        currencyImg.src = "./assets/libra-esterlina.png";
        currencyImg.style.width = "45px";
    }
    convertValues();
}

button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);

// realValueText.innerHTML = input;  ---- forma de alterar o texto
// currencyValueText.innerHTML = input / dolar;
