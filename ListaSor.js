class ListaSor
{
    #index;

    constructor(szuloElem, tartalom, index)
    {
        this.#index = index;
        szuloElem.append(`
            <tr>
                <td>${tartalom.rendszam}</td>
                <td>${tartalom.modell}</td>
                <td><button>❌</button></td>
            </tr>
        `);
    }
}

export default ListaSor;