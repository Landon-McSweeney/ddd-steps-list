/**
 * Copyright 2025 Landon-McSweeney
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(LitElement) {

  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
        border: var(--ddd-border-md);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 {
        margin: 0;
        font-size: var(--ddd-font-size-m);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
        font-weight: bold;
      }
      ::slotted(ddd-steps-list-item) {
        display: block;
        padding: var(--ddd-spacing-2);
        border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-primary);
      }
      ::slotted(ddd-steps-list-item:last-child) {
        border-bottom: none;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h3><span>Step List:</span> ${this.title}</h3>
        <slot></slot>
      </div>`;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);

/**
 * `ddd-steps-list-item`
 * 
 * @demo index.html
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends LitElement {

  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.stepNumber = 0;
    this.title = "";
    this.description = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      stepNumber: { type: Number },
      title: { type: String },
      description: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return css`
      :host {
        display: block;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3);
        border: 1px solid var(--ddd-theme-primary);
      }
      .step {
        font-size: var(--ddd-font-size-l);
        font-weight: bold;
      }
      .description {
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-secondary);
      }
    `;
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="step">Step ${this.stepNumber}: ${this.title}</div>
      <div class="description">${this.description}</div>
    `;
  }
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);