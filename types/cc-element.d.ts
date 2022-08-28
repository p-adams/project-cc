import { LitElement } from "lit";
export interface ISource {
    src: string;
    srcType: string;
}
export declare class CCElement extends LitElement {
    /**
     * Specifies the URL of the media file
     */
    src: string;
    /**
     * Specifies the MIME-type of the resource
     */
    srcType: string;
    sources: Array<ISource>;
    tracks: never[];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cc-element": CCElement;
    }
}
