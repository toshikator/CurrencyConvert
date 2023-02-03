
const apikey = "TGqwppsRmbuK9TGP7IXhlhNdnEhmJvKie84h8cHG"

function currenciesRequest(method, url, body = null) {
    return fetch(`${url}?apikey=${apikey}`,{
        "apikey":apikey
    }).then(response =>response.json())
        .then(response=>response.data);
}

function convertationRequest(method,url,currencyFrom,currencyTo) {
    return fetch(`${url}?apikey=${apikey}&base_currency=${currencyFrom}
    &currencies=${currencyTo}`,{

    }).then(response =>response.json())
        .then(response=>response.data);
}