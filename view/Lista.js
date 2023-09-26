import ListaSor from "./ListaSor.js";

class Lista
{
    #lista;
    #szuloElem;
    #tablaElem;

    constructor(szuloElem, lista)
    {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.append(`
            <table class="table">
            </table>
        `);
        this.#tablaElem = this.#szuloElem.children("table");
        this.listaKiir(this.#lista);
    }

    listaKiir()
    {
        this.#tablaElem.html("");
        this.#tablaElem.append(`
            <tr>
                <th>Rendszám</th>
                <th>Modell</th>
            </tr>
        `);
        this.#lista.forEach((elem, index) => {
            new ListaSor(this.#tablaElem, elem, index);
        });
    }
}

export default Lista;