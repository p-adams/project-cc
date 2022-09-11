import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface Source {
  /**
   * Specifies the URL of the media file
   */
  src: string;
  /**
   * Specifies the MIME-type of the resource
   */
  srcType: string;
}

export interface Cue {
  startTime: number;
  endTime: number;
  text: string;
}

export interface Track {
  label: string;
  kind: string;
  src: string;
  srclang: string;
  default: boolean;
}

export type SourceList = Array<Source>;

type TrackList = Array<Track>;

export type CueList = Array<Cue>;

@customElement("cc-element")
export class CCElement extends LitElement {
  @property()
  sources: SourceList = [];

  @property()
  tracks: TrackList = [];

  render() {
    return html`
      <video controls preload="metadata">
        ${this.sourceEls()} ${this.trackEls()}
      </video>
    `;
  }

  sourceEls() {
    return this.sources.map(
      (source: Source) =>
        html`<source src=${source.src} type=${source.srcType} />`
    );
  }

  trackEls() {
    return this.tracks.map(
      (track: Track) =>
        html`<track
          label=${track.label}
          kind=${track.kind}
          srclang=${track.srclang}
          src=${track.src}
          default=${track.default}
        />`
    );
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
