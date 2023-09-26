class ListaSor
{
    #index;
    #szuloElem;

    constructor(szuloElem, tartalom, index)
    {
        this.#szuloElem = szuloElem;
        this.#index = index;
        szuloElem.append(`
            <tr>
                <td>${tartalom.rendszam}</td>
                <td>${tartalom.modell}</td>
                <td><button>❌</button></td>
            </tr>
        `);
        const TORLES_GOMB_ELEM = this.#szuloElem.children("tr:last-child").children("td").children("button");
        TORLES_GOMB_ELEM.on("click", (event) => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent("torlesEvent", {
                detail: {
                    index: this.#index
                }
            }));
        });
    }
}

export default ListaSor;