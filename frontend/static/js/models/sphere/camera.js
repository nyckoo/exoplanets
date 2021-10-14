import { PerspectiveCamera } from "three";

export default function initCamera() {
    const camera = new PerspectiveCamera(
        30,
        2,
        15,
        4000,
    );
    camera.position.set(0, 0, 2250);
    camera.rotation.set(0, 0, -15 * Math.PI / 180); // axial tilt by 15 degrees left

    return camera;
}