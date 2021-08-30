import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Search");
    }

    async getHtml() {
        return `
        <div class="data-container">
            <div id="model-bg">
                <canvas id="planet-model" width="300px" height="300px">
                    <script src="../model.js"></script>
                </canvas>
            </div>
            <div id="vl"></div>
            <div id="query-bg">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div> 
        `;
    }
}