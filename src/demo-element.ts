import { LitElement, css, html } from "lit";
import { customElement /*property*/, property } from "lit/decorators.js";

import "./cc-element";
import "./cc-cue-element";
import { ISource, ITrack } from "./cc-element";

@customElement("demo-element")
export class DemoElement extends LitElement {
  @property()
  source?: ISource;

  @property()
  track?: ITrack;

  connectedCallback(): void {
    super.connectedCallback();
    this._fetchCaptions();
    this._fetchVideo();
  }
  private async _fetchVideo() {
    await fetch("/api/videos/waves.mp4")
      .then((res) => res)
      .then((res) => {
        this.source = { src: res.url, srcType: "video/mp4" };
      });
  }
  private async _fetchCaptions() {
    await fetch("/api/vtt_files/en.vtt")
      .then((res) => res)
      .then((res) => {
        this.track = {
          label: "English",
          kind: "subtitles",
          src: res.url,
          srclang: "en",
          default: true,
        };
      });
  }
  render() {
    return html`
      <div>
        <section>
          <h3>CC Demo</h3>
          <div>
            <cc-element .track=${this.track} .source=${this.source}>
            </cc-element>
          </div>
        </section>

        <section>
          <h3>CC Cue Demo</h3>
          <div>
            <cc-cue-element
              .source=${this.source}
              .cues=${[
                { startTime: 0, endTime: 1, text: "Testing..." },
                { startTime: 2, endTime: 3, text: "Testing testing..." },
              ]}
            ></cc-cue-element>
          </div>
        </section>
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

    section {
      border: 1px solid grey;
      padding: 10px;
      margin-bottom: 18px;
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
