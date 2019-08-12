import { LitElement, html, css } from 'lit-element';

import Input from './Input.js';


const style = css`
  .SearchBox {
    display: flex;
    flex-direction: column;
    padding: 16px;

    width: 300px;
    
    background: #384051;
    border: 1px solid #14161C;
  }

  .SearchBox input {
    margin-bottom: 10px;
  }
`;


export class SearchBox extends LitElement {
  static get styles() {
    return [
      style,
      Input.style
    ];
  }

  constructor() {
    super();
  }

  render() {
    const inputElement = Input.getTemplate({ keyup: e => console.log(e.target.value), change: e => console.log(e.target.value) })
    return html`
    <div class="SearchBox">
      ${inputElement}
    </div>
    `;
  }
}

customElements.define('goormide-tools-searchbox', SearchBox);