import {
  LitElement,
  css,
  html,
  PropertyDeclaration,
  PropertyValueMap,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { ISource } from "./cc-element";

/**
 * accepts list of VTTCue objects
 * https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/addCue#examples
 */

@customElement("cc-cue-element")
export class CCCueElement extends LitElement {
  @property()
  source?: ISource;

  videoRef: Ref<HTMLVideoElement> = createRef();
  videoRefCb = (el: Element | undefined) => {
    console.log(el);
  };

  render() {
    return html`<video controls preload="metadata" ${ref((e) =>
      this.videoRefCb(e)
    )}>
      <source src=${this.source?.src} type=${this.source?.srcType}></source>
    </video> `;
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
