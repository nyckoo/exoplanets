export default class Model {
    // private fields
    #camera;
    #scene;
    #renderer;
    #params = {
        "particles" : 7500,
        "lines" : 3,
        "distance" : 0x29e34e,
        "shininess" : 0.5
    };

    constructor(container) {
        
        this.#camera = new THREE.PerspectiveCamera(
            30,
            2,
            15,
            4000,
        );
        this.#camera.position.set(0, 0, 2250);

        this.#scene = new THREE.Scene();
        //this.#scene.background = new THREE.Color(0x808080);\
        this.#scene.fog = new THREE.Fog(0x000000, 2500, 4000)
        
        this.#renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
        this.#renderer.setClearColor(0x000000, 0);

        container.append(this.#renderer.domElement);
        //this.#renderer.physicallyCorrectLights = true;
        
        // Custom sphere design
        const geometry = new THREE.BufferGeometry();
        const color = new THREE.Color();
        const positions = [];
        const colors = [];
        const n = 5000;
        let rand = Math.random() + 0.1;
        // Particles layered sphere
        for (let i = 0; i < this.#params.particles; i++) {
            // Max radius squared for particles layered sphere formula
            let maxRad = 241000 + Math.floor(Math.random() * 9000);
            let initRoot = Math.sqrt(maxRad);
            // Center of the sphere at O = (500, 500, 500)
            let x = initRoot - (Math.random() * initRoot * 2);
            maxRad -= (x ** 2);
            let xRoot = Math.sqrt(maxRad);
            let y = xRoot - (Math.random() * xRoot * 2);
            maxRad -= (y ** 2);
            let yRoot = Math.sqrt(maxRad);
            let z = yRoot - (yRoot * 2);
            /*
            if (isNaN(maxRad)) {
                console.log(`${maxRad.init} --> x: ${x}, y: ${y}, z: ${z}`);
            }
            */
            positions.push(y, x, z);
            let vx, vy, vz, res;
            switch (Math.floor(Math.random * 90) % 3 == res) {
                case res == 0:
                    vx = ( x / n ) + 0.725;
                    vy = ( y / n ) + 0.625;
                    vz = ( z / n ) + rand; // some constant dependent on query
                    color.setHSL(vz, vx, vy);
                case res == 1:
                    vx = ( x / n ) + rand;
                    vy = ( y / n ) + 0.725;
                    vz = ( z / n ) + 0.625;
                    color.setHSL(vx, vy, vz);
                case res == 2:
                    vx = ( x / n ) + 0.625;
                    vy = ( y / n ) + rand;
                    vz = ( z / n ) + 0.725;
                    color.setHSL(vy, vz, vx);
            }
            colors.push(color.r, color.g, color.b);    
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        geometry.computeBoundingSphere();

        //const geometry = new THREE.SphereBufferGeometry(10,32,32);
        const material = new THREE.PointsMaterial({size: 23, vertexColors: true});
        const points = new THREE.Points(geometry, material);

        //const light = new THREE.DirectionalLight('white', 10);
        //light.position.set(30,30,30);

        this.#scene.add(points);
  
        // Set the camera's aspect ratio
        this.#camera.aspect = container.clientWidth / (container.clientHeight * 2);
        
        // update the camera's frustum
        this.#camera.updateProjectionMatrix();
        
        // update the size of the renderer AND the canvas
        this.#renderer.setSize(container.clientWidth * 1.375, container.clientHeight * 2.75);
        
        // set the pixel ratio (for mobile devices)
        this.#renderer.setPixelRatio(window.devicePixelRatio);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }
}