import { WebGLRenderer } from "three";

export default function initRenderer() {
    const renderer = new WebGLRenderer({antialias:true, alpha: true});
        
    renderer.setClearColor(0x000000, 0);

    renderer.physicallyCorrectLights = true;

    return renderer;
}