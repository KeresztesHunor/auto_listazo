class Urlap
{
    #autoLista;
    #szuloElem;
    #rendszamInputElem;
    #modellInputElem;
    #submitGombElem;

    constructor(szuloElem)
    {
        this.#autoLista = [];
        this.#szuloElem = szuloElem;
        this.#szuloElem.append(`
            <form>
                <label for="rendszam">Rendszám:</label>
                <input type="text" id="rendszam" name="rendszam" placeholder="Rendszám">
                <label for="modell">Modell:</label>
                <input type="text" id="modell" name="modell" placeholder="Modell">
                <button type="submit" class="btn btn-success">Ok</button>
            </form>
        `);
        this.#rendszamInputElem = $("#rendszam");
        this.#modellInputElem = $("#modell");
        this.#submitGombElem = $("#ujadat > form > button");
        this.#submitGombElem.on("click", (event) => {
            event.preventDefault();
            this.#autoLista.push({
                rendszam: this.#rendszamInputElem.val(),
                modell: this.#modellInputElem.val()
            });
            console.log(this.#autoLista[this.#autoLista.length - 1]);
        });
    }
}

export default Urlap;