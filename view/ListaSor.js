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
                <td class="border">${tartalom.rendszam}</td>
                <td class="border">${tartalom.modell}</td>
                <td class="border"><button class="btn">❌</button></td>
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