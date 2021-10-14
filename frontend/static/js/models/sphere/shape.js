import { BufferGeometry, Color, Float32BufferAttribute, PointsMaterial, Points,
        MeshLambertMaterial, Mesh, FrontSide, Group, Vector3, DoubleSide, MeshPhongMaterial, FlatShading, MeshNormalMaterial, ObjectSpaceNormalMap } from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

export default function initShape(particles) {
    // Custom sphere design
    const pointsGeometry = new BufferGeometry();
    const color = new Color();
    const positions = [];
    const colors = [];
    const n = 5000;
    let rand = Math.random() + 0.1;
    //let start = new Date();
    // Particles layered sphere
    for (let i = 0; i < particles; i++) {
        // 490 <= Radius < 500
        let r = 450 + Math.random() * 50;
        // <0 - 180)
        let theta = Math.PI * Math.random();
        // <0 - 360)
        let phi = Math.PI * 2 * Math.random();
        // coordinates
        let x = r * Math.cos(phi) * Math.sin(theta);
        let y = r * Math.sin(phi) * Math.sin(theta);
        let z = r * Math.cos(theta);
        /*
        // Max radius squared for 3 coordinates to be used in
        let maxRad = 245025 + Math.floor(Math.random() * 4976);
        let initRoot = Math.sqrt(maxRad);
        let x = initRoot - (Math.random() * initRoot * 2);
        maxRad -= (x ** 2);
        let xRoot = Math.sqrt(maxRad);
        let y = xRoot - (Math.random() * xRoot * 2);
        maxRad -= (y ** 2);
        let yRoot = Math.sqrt(maxRad);
        let z = yRoot - Math.floor((Math.random() * 2)) * (yRoot * 2);
        // Check for Nan values
        if (isNaN(maxRad)) {
            console.log(`${maxRad.init} --> x: ${x}, y: ${y}, z: ${z}`);
        }
        */
        positions.push(new Vector3(x, z, y));
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

    pointsGeometry.setFromPoints(positions);
    //pointsGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

    pointsGeometry.computeBoundingSphere();

    //const geometry = new SphereBufferGeometry(10,32,32);
    const pointsMaterial = new PointsMaterial({size: 23, vertexColors: true});
    const points = new Points(pointsGeometry, pointsMaterial);

    const meshMaterial = new MeshNormalMaterial( {
        //color: 0xffffff,
        normalMapType: ObjectSpaceNormalMap,
        transparent: true,
        opacity: 0.5,
        side: DoubleSide,
        //flatShading: true,
        wireframe: true,
        depthTest: true,
        depthWrite: true,
    });

    const meshGeometry = new ConvexGeometry(positions);

    const mesh = new Mesh(meshGeometry, meshMaterial);
    //mesh.material.side = FrontSide;
    //mesh.renderOrder = 1;

    //let end = new Date();
    //let elapsed = end.getTime() - start.getTime();

    const shape = new Group();
    shape.add(points);
    shape.add(mesh);

    shape.tick = () => {
        shape.rotation.y += 0.005;
    };

    return shape;
}