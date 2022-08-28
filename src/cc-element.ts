import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface ISource {
  src: string;
  srcType: string;
}

export interface ITrack {
  label: string;
  kind: string;
  srclang: string;
  default: boolean;
}

type SourceList = Array<ISource>;

type TrackList = Array<ITrack>;

@customElement("cc-element")
export class CCElement extends LitElement {
  /**
   * Specifies the URL of the media file
   */
  @property({ type: String })
  src = "";
  /**
   * Specifies the MIME-type of the resource
   */
  @property({ type: String })
  srcType = "";

  @property()
  sources: SourceList = [];

  @property()
  tracks: TrackList = [];

  render() {
    return html`
      <video controls preload="metadata">
        <source src=${this.src} type=${`video/${this.srcType}`} />
        <div></div>
      </video>
    `;
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
