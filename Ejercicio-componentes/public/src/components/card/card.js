class Card extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description', 'txtbutton'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
			 <style>
            .product-card {
                font-family: 'Poppins', sans-serif;
            }
            
        </style>
			<link rel="stylesheet" href="./src/components/card/card.css">
			<section class="product-card">
				<img src=${this.img} alt=${this.alt}>
				<div class="text-card"> <h1>${this.title}</h1>
				<p>${this.description}</p>
				<div><button>${this.txtbutton}</button></div>
			</section>
    `;
	}
}

customElements.define('product-card', Card);
export default Card;
