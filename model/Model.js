import { AUTOK } from "../adatok.js";

class Model
{
    #autoLista;

    constructor()
    {
        this.#autoLista = [];
    }

    get autoLista()
    {
        return this.#autoLista;
    }

    elemHozzaad(elem)
    {
        this.#autoLista.push(elem);
        console.log(this.#autoLista[this.#autoLista.length - 1]);
    }

    elemTorol(index)
    {
        this.#autoLista.splice(index, 1);
    }

    listaMent()
    {
        AUTOK = this.#autoLista;
    }
}

export default Model;