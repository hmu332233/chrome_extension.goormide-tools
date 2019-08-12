import { LitElement, html, css } from 'lit-element';

import './components/SearchBox.js';

export class GoormideTools extends LitElement {
  static get styles() {
    return css`
      :host {
        position: fixed;
        top: 30px;
        right: 30px;
        z-index: 2147483646;
        max-width: min-content;
        font-size: 16px;
      }
    `
  }

  constructor() {
    super();
    this.isOpen = false;
    this.toggleTerminalCommandsPalette = this.toggleTerminalCommandsPalette.bind(this);

    document.addEventListener('terminal_commands_palette', this.toggleTerminalCommandsPalette, false);
  }

  toggleTerminalCommandsPalette() {
    this.isOpen = !this.isOpen;
    this.requestUpdate();
  }

  render() {
    return html`
    <div>
      ${this.isOpen ? html`<goormide-tools-searchbox />`: ''}
    </div>
    `;
  }
}

customElements.define('goormide-tools', GoormideTools);