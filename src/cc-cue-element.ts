import { LitElement, css, html, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { ISource, CueList } from "./cc-element";

/**
 * accepts list of VTTCue objects
 * https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/addCue#examples
 */

@customElement("cc-cue-element")
export class CCCueElement extends LitElement {
  @property()
  source?: ISource;

  @property()
  cues: CueList = [];

  @property()
  video: any;

  videoRef: Ref<HTMLVideoElement> = createRef();

  render() {
    return html`<video controls preload="metadata" ${ref(this.videoRef)}>
      <source src=${this.source?.src} type=${this.source?.srcType}></source>
    </video> `;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const track = this.videoRef.value?.addTextTrack(
      "captions",
      "Captions",
      "en"
    );
    track!.mode = "showing";
    for (const cue of this.cues) {
      track?.addCue(new VTTCue(cue.startTime, cue.endTime, cue.text));
    }
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
