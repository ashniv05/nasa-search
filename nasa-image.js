import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.secondary_creator = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: {type: String},
        secondary_creator: {type: String},
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    width: 240px;
    height: auto;
    }

    .image:hover {
      background-color: blue;

    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 240px;
    height: auto;
    }
    a {
      text-align: center;
      text-decoration: none;
      color: grey;
    }

    `];
  }

  render() {
    return html`
    <div class="image" tabindex="0">
    <a href="${this.source}" target="_blank" rel="noopener">
        <img src="${this.source}" alt="${this.alt}" />
        <div>${this.title}</div>
        <div>SecCreator: ${this.secondary_creator}</div>
        </a>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);