import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <div class="data-container">
                <h1>Welcome to interstellar discoveries!</h1>
                <p>
                    <a href="/search" data-link>Seek for the new worlds</a> in the endless, black void.
                </p>    
            </div>
        `;
    }
}