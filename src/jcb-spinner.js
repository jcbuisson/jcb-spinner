import { LitElement, css, html } from 'lit'

/**
   * A custom-element which displays a spinner
   * @cssprop --jcb-spinner-color - Color of the ticks
   * @cssprop --jcb-spinner-background - Color of the background
   */
export class Spinner extends LitElement {

   static get properties() {
      return {
         visible: { type: Boolean },
         radius: { type: String },
      }
   }

   constructor() {
      super()
      // default values - before override by attributes
      this.visible = true
      this.radius = "24rem"
   }

   get colorClass() {
      return this.hover ? 'hovergray' : ''
   }

   // called whenever a property changes
   render() {
      console.log('render', this.visible)
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
         /* :host selects the host element (<jcb-upload>, not its shadow dom) */
         :host {
            display: inline-block; /* by default a CE is inline and width & height do not apply */
            width: 100%; /* <jcb-upload> takes full parent width */
            height: 100%; /* <jcb-upload> takes full parent height */
         }

         /* Fullscreen overlay */
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

         /* Semi-transparent background */
         .overlay-background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: black;
            opacity: 0.5;
         }

         /* Spinner */
         .spinner {
            width: 24rem; /* 96px converted to rems */
            height: 24rem; /* 96px converted to rems */
            border-top: 8px solid white;
            border-radius: 50%;
            border-style: solid;
            margin: auto;
            animation: spin 1s linear infinite;
         }

         /* Spinner animation */
         @keyframes spin {
            0% {
               transform: rotate(0deg);
            }
            100% {
               transform: rotate(360deg);
            }
         }

         /* Overlay content */
         .overlay-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
         }
      `
   }
}

window.customElements.define('jcb-spinner', Spinner)
