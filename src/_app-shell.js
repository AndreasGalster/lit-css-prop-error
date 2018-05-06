import {LitElement, html} from '@polymer/lit-element/lit-element.js'
import '@polymer/iron-selector/iron-selector.js';
import {absoluteView} from './absolute_view.js';

	class AppShell extends LitElement {

		static get properties() { return {
			route: Object,	
		}; }

		// using just p-tag will work
		// if you add app-route with the prop it will not work. @NOTE: It's not even loaded as a dependency
		// Also note, this code below will work as soon as you remove absoluteView
		_render({route}) {
			console.log(absoluteView);
			console.log(route);
			return html`
				<style>
					:host {
						${absoluteView}
					}
				</style>


				<p>${route}</p>
		    	<app-route route=${route} pattern=/:page></app-route>
			`;
		}
		constructor() {
			super();

			this.route = '/helloworld';
		}

	}

	customElements.define('app-shell', AppShell);
