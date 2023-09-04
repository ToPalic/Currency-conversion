document.getElementById('convert').addEventListener('click', function () {
    // Dohvat unesenog iznosa i odabrane valute
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    // Postavljanje tečajeva
    const usdToEurRate = 0.85;
    const eurToUsdRate = 1.18;

    // Izračun konverzije
    let result;
    if (currency === 'usd-to-eur') {
        result = amount * usdToEurRate;
    } else if (currency === 'eur-to-usd') {
        result = amount * eurToUsdRate;
    } else {
        result = 'Nepoznata valuta';
    }

    // Prikaz rezultata
    document.getElementById('result').textContent = `Rezultat konverzije: ${result.toFixed(2)}`;
});