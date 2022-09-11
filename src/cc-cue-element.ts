import { LitElement, css, html, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { Source, CueList, SourceList } from "./cc-element";

/**
 * accepts list of VTTCue objects
 * https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/addCue#examples
 */

@customElement("cc-cue-element")
export class CCCueElement extends LitElement {
  @property()
  sources?: SourceList;

  @property()
  cues: CueList = [];

  videoRef: Ref<HTMLVideoElement> = createRef();

  render() {
    return html`<video controls preload="metadata" ${ref(this.videoRef)}>
      ${this.sourceEls()}
    </video> `;
  }

  sourceEls() {
    return this.sources?.map(
      (source: Source) =>
        html`<source src=${source.src} type=${source.srcType} />`
    );
  }

  private setCaptions({
    kind,
    label,
    language,
  }: {
    kind: TextTrackKind;
    label?: string;
    language?: string;
  }) {
    const track = this.videoRef.value?.addTextTrack(kind, label, language);
    track!.mode = "showing";
    for (const cue of this.cues) {
      track?.addCue(new VTTCue(cue.startTime, cue.endTime, cue.text));
    }
  }
  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    this.setCaptions({
      kind: "captions",
      label: "Captions",
      language: "en",
    });
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
