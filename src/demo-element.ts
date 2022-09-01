import { LitElement, css, html } from "lit";
import { customElement /*property*/, property } from "lit/decorators.js";

import "./cc-element";

@customElement("demo-element")
export class DemoElement extends LitElement {
  @property()
  videoUrl: string = "";

  @property()
  captionUrl: string = "";

  connectedCallback(): void {
    super.connectedCallback();
    this._fetchCaptions();
    this._fetchVideo();
  }
  private async _fetchVideo() {
    await fetch("/api/videos/waves.mp4")
      .then((res) => res)
      .then((res) => (this.videoUrl = res.url));
  }
  private async _fetchCaptions() {
    await fetch("/api/vtt_files/en.vtt")
      .then((res) => res)
      .then((res) => (this.captionUrl = res.url));
  }
  render() {
    return html`
      <div>
        <cc-element
          videoSrc=${this.videoUrl}
          captionsSrc=${this.captionUrl}
        ></cc-element>
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
