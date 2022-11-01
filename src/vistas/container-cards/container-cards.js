import { html, LitElement } from "lit-element";
import '../../components/card/card'

class Container extends LitElement{
    constructor(){
        super()
        this.cards = [
            {name: 'Itzel Segura', numberCard: '4083 4212 7630 342', type:'premium'},
            {name: 'Itzel Segura', numberCard: '4083 4212 7630 342', type:'oro'},
            {name: 'Itzel Segura', numberCard: '4083 4212 7630 342', type:'black'},
        ]
    }

    render(){
        return html`
         <gft-card .cards="${this.cards}"></gft-card>
        `
    }

}
window.customElements.define("gft-container", Container);