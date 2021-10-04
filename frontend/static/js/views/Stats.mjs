import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Exoplanets - Stats");
    }

    async getHtml() {
        return `
            <div class="data-container">
                <h3>Section dedicated to statistics around the topic.</h3>
            </div>
        `;
    }

    async getScript() {
        return null;
    }
}