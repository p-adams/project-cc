import { LitElement } from "lit";
import "./cc-element";
export declare class DemoElement extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "demo-element": DemoElement;
    }
}
