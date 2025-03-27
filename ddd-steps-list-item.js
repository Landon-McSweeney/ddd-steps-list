import { LitElement, html, css } from "lit";

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
