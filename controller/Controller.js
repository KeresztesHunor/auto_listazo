import Lista from "../view/Lista.js";
import Urlap from "../view/Urlap.js";
import Model from "../model/Model.js";

class Controller
{
    #model;
    #urlap;
    #lista;

    constructor()
    {
        this.#model = new Model();
        this.#urlap = new Urlap($("#ujadat"));
        this.#lista = new Lista($("#tarolo"), this.#model.autoLista);
        $(window).on("ujElemEvent", (event) => {
            event.preventDefault();
            this.#model.elemHozzaad(event.detail.ujElem);
            this.#lista.listaKiir();
        });
        $(window).on("torlesEvent", (event) => {
            this.#model.elemTorol(event.detail.index);
            this.#lista.listaKiir();
        });
    }
}

export default Controller;