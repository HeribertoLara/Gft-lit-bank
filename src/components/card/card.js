import {
    html,
    LitElement
} from "lit-element";

class Card extends LitElement {
    static get properties(){
        return{
            cards:{Array}
        }
    }
    render() {
        return html `
        ${this.cards.map((e)=>{
            return html`
            <section
            class="main__target main__target--black"
            id="premium"
            onclick="mostrar(event)"
            >
              <div class="target-p1">
                <h2>GFT ${e.type}</h2>
                <p>Tarjeta de crédito</p>
              </div>
              <p class="target-p2">${e.numberCard}</p>
              <div class="target-p3">
                  <h2>${e.name}</h2>
                  <p><small>Vencimiento</small> 08/27</p>
                  </div>
                  <img src="/assets/images/visa.png" alt="Logo Visa" />
                  </section>
            `
        })}

        <link rel="stylesheet" href="/src/components/card/card.css">
      
    `;
    }
}
window.customElements.define("gft-card", Card);