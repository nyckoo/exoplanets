import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Exoplanets - Search");
    }
    
    async getHtml() {
        return `
        <div class="data-container">
            <div id="model-bg">
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

    async getScript() {
        // Reference to the container el.
        const container = document.querySelector("#model-bg");
        import("../model/Model.mjs").then(module => {
            // Default class import as a module
            const Model = module.default;
            // Instance of a new Model
            const model = new Model(container);
            // Render the scene
            model.render();
        })
        .catch(err => {
            console.log(err);
        });
    }
}
