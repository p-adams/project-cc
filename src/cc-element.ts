import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface ISource {
  /**
   * Specifies the URL of the media file
   */
  src: string;
  /**
   * Specifies the MIME-type of the resource
   */
  srcType: string;
}

export interface ICue {
  startTime: number;
  endTime: number;
  text: string;
}

export interface ITrack {
  label: string;
  kind: string;
  src: string;
  srclang: string;
  default: boolean;
}

type SourceList = Array<ISource>;

type TrackList = Array<ITrack>;

export type CueList = Array<ICue>;

@customElement("cc-element")
export class CCElement extends LitElement {
  // TODO: accept multiple sources/tracks
  @property()
  sources: SourceList = [];

  @property()
  tracks: TrackList = [];

  @property()
  source?: ISource;

  @property()
  track?: ITrack;

  render() {
    return html`
      <video controls preload="metadata">
        <source src=${this.source?.src} type=${`${this.source?.srcType}`} />
        <track label=${this.track?.label} kind=${this.track?.kind}
        srclang=${this.track?.srclang} "en" src=${this.track?.src}
        default=${this.track?.default} />
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
