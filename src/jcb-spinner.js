import { LitElement, css, html } from 'lit'

/**
   * A custom-element which displays a spinner
   * @attr {Boolean} visible - Indicates whether spinner is visible or not
   * @cssprop --jcb-spinner-size - Width & height of rotating spinner
   * @cssprop --jcb-spinner-background-opacity - Background opacity
   * @cssprop --jcb-spinner-background - Ring background color
   * @cssprop --jcb-spinner-color - Ring rotating part color
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
      this.visible = true
   }

   get colorClass() {
      return this.hover ? 'hovergray' : ''
   }

   // called whenever a property changes
   render() {
      // console.log('render', this.visible)
      return html`
         ${this.visible
            ? html`
               <div class="overlay">
                  <div class="overlay-background background-opacity"></div>
                  <div class="spinner spinner-size border-width border-color"></div>
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
         }

         .spinner {
            border-style: solid;
            border-top-style: solid;
            border-radius: 50%;
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

         .spinner-size {
            width: var(--jcb-spinner-size, 18em);
            height: var(--jcb-spinner-size, 18em);
         }

         .background-opacity {
            opacity: var(--jcb-spinner-background-opacity, 0.3);
         }

         .border-width {
            border-width: var(--jcb-spinner-border-width, 25px);
            border-top-width: var(--jcb-spinner-border-width, 25px);
         }

         .border-color {
            border-color: var(--jcb-spinner-border-background, #ccc);
            border-top-color: var(--jcb-spinner-border-color, #007bff);
         }
      `
   }
}

window.customElements.define('jcb-spinner', Spinner)
