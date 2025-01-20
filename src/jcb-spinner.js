import { LitElement, css, html } from 'lit'

/**
   * A custom-element which displays a spinner
   * @attr {Boolean} visible - Indicates whether spinner is visible or not (default: false)
   * @cssprop --jcb-spinner-size - Width & height of rotating spinner (default: 18em)
   * @cssprop --jcb-spinner-background-opacity - Background opacity (default: 0.3)
   * @cssprop --jcb-spinner-border-width - Spinner border width (default:) 25px);
   * @cssprop --jcb-spinner-border-background - Spinner border background color (default: #ccc);
   * @cssprop --jcb-spinner-border-color - Spinner border color (default: #007bff);
   */
export class Spinner extends LitElement {

   static get properties() {
      return {
         visible: { type: Boolean },
      }
   }

   constructor() {
      super()
      // default values - before override by attributes
      this.visible = false
   }

   // called whenever a property changes
   render() {
      // console.log('render', this.visible)
      return html`
         ${this.visible
            ? html`
               <div class="overlay">
                  <div class="overlay-background"></div>
                  <div class="spinner"></div>
                  <div class="overlay-content">
                     <slot></slot>
                  </div>
               </div>
            `
            : ''
         }
      `
   }

   static get styles() {
      return css`
         /* :host selects the host element (<jcb-spinner>, not its shadow dom) */
         :host {
            display: inline-block; /* by default a CE is inline and width & height do not apply */
            width: 100%; /* <jcb-spinner> takes full parent width */
            height: 100%; /* <jcb-spinner> takes full parent height */
         }

         .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
         }

         .overlay-background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: black;
            opacity: var(--jcb-spinner-background-opacity, 0.3);
         }

         .spinner {
            width: var(--jcb-spinner-size, 18em);
            height: var(--jcb-spinner-size, 18em);
            border-style: solid;
            border-width: var(--jcb-spinner-border-width, 25px);
            border-color: var(--jcb-spinner-border-background, #ccc);
            border-radius: 50%;
            border-top-style: solid;
            border-top-width: var(--jcb-spinner-border-width, 25px);
            border-top-color: var(--jcb-spinner-border-color, #007bff);
            animation: spin 1s linear infinite;
         }

         .overlay-content {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
         }

         @keyframes spin {
            0% {
               transform: rotate(0deg);
            }
            100% {
               transform: rotate(360deg);
            }
         }
      `
   }
}

window.customElements.define('jcb-spinner', Spinner)
