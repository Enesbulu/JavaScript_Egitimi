export class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YilTFWzlK3FxsoSnTSgKXDpJhabNJgpyLnX6tFHo&base_currency=";
    }
    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();

        createTables(result.data, firstCurrency);
        const exchangeResult = amount * result.data[secondCurrency];
        return exchangeResult;
    }
}

///Tablo oluşturma metodu
function createTables(data, firstCurrency) {
    const table = document.querySelector("#tablo");
    table.innerHTML = "";

    // Başlık satırını oluşturma
    const headerRow = document.createElement("tr");
    ["Kur", "=>", "Fiyatı"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.color = "#ffbcbc";
        th.style.padding = "10px";
        th.style.backgroundColor = "#074154";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Verileri tabloya ekleme
    Object.entries(data).forEach(([rate, value]) => {
        const row = document.createElement("tr");

        [rate, " ", value].forEach(text => {
            const td = document.createElement("td");
            td.textContent = text;
            td.style.border = "1px solid gray";
            td.style.padding = "8px";
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    // Tabloya genel stil ekleme
    table.style.border = '2px solid black';
    table.style.width = '100%';
    table.style.textAlign = 'center';

    // Satırların arka plan rengini değiştirme
    table.querySelectorAll('tr:nth-child(even)').forEach(row => {
        row.style.backgroundColor = '#f2f2f2';
    });

}
