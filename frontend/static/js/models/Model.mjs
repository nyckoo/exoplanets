import { PerspectiveCamera, Scene, Fog, WebGLRenderer, Group, BufferGeometry, Color, Float32BufferAttribute,
    PointsMaterial, Points, MeshLambertMaterial, Mesh, BackSide } from "three";

export default class Model {
    // private fields
    #camera;
    #scene;
    #renderer;
    #object;
    #params = {
        "particles" : 7500,
        "lines" : 3,
        "distance" : 0x29e34e,
        "shininess" : 0.5
    };

    constructor(container) {
        
        this.#camera = new PerspectiveCamera(
            30,
            2,
            15,
            4000,
        );
        this.#camera.position.set(0, 0, 2250);

        this.#scene = new Scene();
        //this.#scene.background = new Color(0x808080);\
        this.#scene.fog = new Fog(0x000000, 2500, 4000)
        
        this.#renderer = new WebGLRenderer({antialias:true, alpha: true});
        this.#renderer.setClearColor(0x000000, 0);

        container.append(this.#renderer.domElement);
        //this.#renderer.physicallyCorrectLights = true;
        
        this.#object = new Group();
        this.#scene.add(this.#object);

        // Custom sphere design
        const pointsGeometry = new BufferGeometry();
        const color = new Color();
        const positions = [];
        const colors = [];
        const n = 5000;
        let start = new Date();
        let rand = Math.random() + 0.1;
        // Particles layered sphere
        for (let i = 0; i < this.#params.particles; i++) {
            // 491 <= Radius <= 500
            // Max radius squared for 3 coordinates to be used in
            let maxRad = 245025 + Math.floor(Math.random() * 4976);
            let initRoot = Math.sqrt(maxRad);
            let x = initRoot - (Math.random() * initRoot * 2);
            maxRad -= (x ** 2);
            let xRoot = Math.sqrt(maxRad);
            let y = xRoot - (Math.random() * xRoot * 2);
            maxRad -= (y ** 2);
            let yRoot = Math.sqrt(maxRad);
            let z = yRoot - (yRoot * 2);
            /* // Check for Nan values
            if (isNaN(maxRad)) {
                console.log(`${maxRad.init} --> x: ${x}, y: ${y}, z: ${z}`);
            }
            */
            positions.push(y, x, z);
            let vx, vy, vz, res;
            switch (Math.floor(Math.random * 3) % 3 == res) {
                case res == 0:
                    vx = ( x / n ) + 0.725;
                    vy = ( y / n ) + 0.625;
                    vz = ( z / n ) + rand;
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
        
        pointsGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        pointsGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

        pointsGeometry.computeBoundingSphere();

        //const geometry = new SphereBufferGeometry(10,32,32);
        const pointsMaterial = new PointsMaterial({size: 23, vertexColors: true});
        const points = new Points(pointsGeometry, pointsMaterial);

        const meshMaterial = new MeshLambertMaterial( {
            color: 0xffffff,
            opacity: 0.5,
            transparent: true
        });
        
        const meshGeometry = new BufferGeometry();
        const mesh = new Mesh(meshGeometry, meshMaterial);
        meshGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        mesh.material.side = BackSide;
        mesh.renderOrder = 0;

        let end = new Date();
        let elapsed = end.getTime() - start.getTime();
        console.log(`Elapsed time: ${elapsed}ms`);

        //const light = new DirectionalLight('white', 10);
        //light.position.set(30,30,30);
        //this.#scene.add(new AmbientLight( 0x404040 ));

        this.#object.add(points);
        this.#object.add(mesh);
        
        window.addEventListener('resize', this.onWindowResize);
    }

    onWindowResize() {
        // Set the camera's aspect ratio
        this.#camera.aspect = container.clientWidth / (container.clientHeight * 2);
        
        // update the camera's frustum
        this.#camera.updateProjectionMatrix();
        
        // update the size of the renderer AND the canvas
        this.#renderer.setSize(container.clientWidth * 1.375, container.clientHeight * 2.75);
        
        // set the pixel ratio (for mobile devices)
        this.#renderer.setPixelRatio(window.devicePixelRatio);
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.#object.rotation.y = Date.now() * 0.001;
        this.render();
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }
}