import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cc-element")
export class CCElement extends LitElement {
  /**
   *
   * video src
   */
  @property({ type: String })
  src = "";

  render() {
    return html` <video controls src=${this.src}></video> `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    video {
      width: 420px;
      height: 300px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cc-element": CCElement;
  }
}
