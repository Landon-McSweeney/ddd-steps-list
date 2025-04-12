import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";
class DddStepsListItem extends DDD {
  static get properties() {
    return {
      step: { type: Number, reflect: true },
      title: { type: String },
      dataPrimary: { type: String, attribute: 'data-primary', reflect: true }
    };
  }

  constructor() {
    super();
    this.step = 0;
    this.title = '';
    this.dataPrimary = '#005fa9';
  }

  updated(changedProps) {
    if (changedProps.has('dataPrimary')) {
      this.style.setProperty('--ddd-primary-color', this.dataPrimary);
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-surface, #fff);
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          font-family: sans-serif;
          position: relative;
          padding-left: 3rem;
        }

        .circle {
          position: absolute;
          top: 1rem;
          left: 0;
          width: 2rem;
          height: 2rem;
          background: var(--ddd-primary-color, #005fa9);
          color: white;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-weight: bold;
          font-size: 1.1rem;
          margin: 0 0 0.3rem;
        }

        p {
          margin: 0;
        }

        @media (max-width: 600px) {
          :host {
            padding-left: 2.5rem;
          }

          .circle {
            top: 0.75rem;
            width: 1.6rem;
            height: 1.6rem;
            font-size: 0.9rem;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="circle">${this.step}</div>
      <div>
        ${this.title ? html`<div class="title">${this.title}</div>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ddd-steps-list-item', DddStepsListItem);