// Rollup bundler conf.
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
{
    input: 'frontend/static/js/models/background.js',
    output: {
        dir: __dirname + '/frontend/static/js/bundle',
        format: 'es',
        name: 'particles'
    },
    plugins: [nodeResolve(), terser()]
},
{
    input: 'frontend/static/js/models/sphere/Sphere.js',
    output: {
        dir: __dirname + '/frontend/static/js/bundle',
        format: 'es',
        name: 'sphere'
    },
    plugins: [nodeResolve(), terser()]
},
]