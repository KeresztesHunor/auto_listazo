import Lista from "./Lista.js";
import Urlap from "./Urlap.js";

class Controller
{
    #urlap;
    #lista;

    constructor()
    {
        this.#urlap = new Urlap($("#ujadat"));
        this.#lista = new Lista($("#tarolo"));
    }
}

export default Controller;