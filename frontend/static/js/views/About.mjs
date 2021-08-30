import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div class="data-container">
                <h3>Here are basic astronomy terms & project insights</h3>
                <p>
                    About exoplanets
                </p>
                <p>
                    Technologies that were used
                </p>
            </div>
        `;
    }
}