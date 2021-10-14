import { Scene, Fog, AmbientLight } from 'three';

export default function initScene() {
    const scene = new Scene();

    scene.fog = new Fog(0x000000, 2000, 3000);

    scene.add(new AmbientLight( 0xffffff ));

    return scene;
}