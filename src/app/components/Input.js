import { html, css } from 'lit-element';

const getTemplate = (props) => {
  return html`
    <input class="Input" @keyup="${props.keyup}" @change="${props.change}" />
  `;
}

const style = css`
  input {
    width: 100%;
    outline: none;
    color: #CED0DA;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    font-size: 12px;
    line-height: 1.6667;
    padding: 5px 13px;
    height: auto;
    border: 1px solid #14161C;
    background: #222734;
    box-sizing: border-box;
  }
  input:focus {
    outline: none;
  }
`;

export default { getTemplate, style };