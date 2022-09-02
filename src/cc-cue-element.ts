import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * accepts list of VTTCue objects
 * https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/addCue#examples
 */

@customElement("cc-cue-element")
export class CCCueElement extends LitElement {
  render() {
    return html` <video controls preload="metadata"></video> `;
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
    "cc-cue-element": CCCueElement;
  }
}
