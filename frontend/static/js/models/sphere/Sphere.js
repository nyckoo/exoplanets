import initCamera from "./camera";
import initScene from "./scene";
import initShape from "./shape";
import initRenderer from "./renderer";
import Resizer from "./Resizer";
import Loop from "./Loop";

export default class Sphere {
    
    #camera;
    #renderer;
    #scene;
    #loop;
    #shape;
    #params; // some data from DB to alter sphere features

    constructor(container) {
        this.#camera = initCamera();
        this.#renderer = initRenderer();
        this.#scene = initScene();

        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

        container.append(this.#renderer.domElement);

        this.#shape = initShape(10000);

        this.#loop.updatable = this.#shape;

        this.#scene.add(this.#shape);

        const resizer = new Resizer(container.clientWidth, container.clientHeight, this.#camera, this.#renderer);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }

    start() {
        this.#loop.start();
    }

    stop() {
        this.#loop.stop();
    }
}