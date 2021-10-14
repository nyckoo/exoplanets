const setSize = (width, height, camera, renderer) => {
    // Set the camera's aspect ratio
    camera.aspect = width / (height * 2);
        
    // update the camera's frustum
    camera.updateProjectionMatrix();
    
    // update the size of the renderer AND the canvas
    renderer.setSize(width * 1.375, height * 2.75);
    
    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
}

export default class Resizer {
    constructor(width, height, camera, renderer) {
        setSize(width, height, camera, renderer);

        window.addEventListener('resize', () => {
            setSize(width, height, camera, renderer);
            this.onResize();
        });
    }

    onResize() {}
}