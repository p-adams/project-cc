import { LitElement, css, html } from "lit";
import { customElement /*property*/ } from "lit/decorators.js";

import "./cc-element";

@customElement("demo-element")
export class DemoElement extends LitElement {
  render() {
    return html`
      <div>
        <cc-element></cc-element>
      </div>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-element": DemoElement;
  }
}
