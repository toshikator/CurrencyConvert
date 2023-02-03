(()=>{
    const currenciesUrl = "https://api.currencyapi.com/v3/currencies";
    const convertationUrl = "https://api.currencyapi.com/v3/latest";
    const inputValue = document.getElementById('inputValue');
    const outputValue = document.getElementById('resultValue');
    const currencyCalculator = document.querySelector('.currencyCalculator');
    let currenciesList=[{eur:'euro'}];
    const convertBtn = document.getElementById('convertBtn');
    const listCurrencyFrom = document.getElementById('listCurrencyFrom');
    const listCurrencyTo = document.getElementById('listCurrencyTo');
    async function setCurrenciesList(){
        listCurrencyFrom.innerHTML='';
        listCurrencyTo.innerHTML='';
        await currenciesRequest('GET',currenciesUrl)
            .then(data=>{
                Object.keys(data).forEach(currency=>{
                    const option = document.createElement('option');
                    option.textContent = currency;
                    listCurrencyFrom.append(option);
                    listCurrencyTo.append(option.cloneNode(true));
                });
            });
    }
document.addEventListener('DOMContentLoaded',()=>{
    setCurrenciesList();
})
    currencyCalculator.addEventListener('click',(event)=>{
        if (event.target.id === 'convertBtn'){
            // console.log('lollololjknkmn');
            convertationRequest('GET',convertationUrl,listCurrencyFrom.value,listCurrencyTo.value)
                .then(data=>{
                    outputValue.textContent = ((Object.entries(data)[0][1]['value'])*inputValue.value).toFixed(2).toString();
                })
        }
    })
})()