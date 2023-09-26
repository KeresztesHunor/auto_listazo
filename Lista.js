import ListaSor from "./ListaSor.js";

class Lista
{
    #szuloElem;
    #tablaElem;

    constructor(szuloElem, lista)
    {
        this.#szuloElem = szuloElem;
        this.#szuloElem.append(`
            <table class="table">
            </table>
        `);
        this.#tablaElem = this.#szuloElem.children("table");
    }

    #listaKiir(lista)
    {
        this.#szuloElem.clear();
        this.#szuloElem.append(`
            <tr>
                <th>Rendszám</th>
                <th>Modell</th>
            </tr>
        `);
        lista.forEach((elem, index) => {
            new ListaSor(this.#tablaElem, elem, index);
        });
    }
}

export default Lista;