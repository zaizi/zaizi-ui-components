import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass'
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.jsx', '.ts', '.tsx'] 

export default [
    {   
        acornInjectPlugins: [jsx()],
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        plugins: [
            sass(),
            resolve({extensions}),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            typescript({jsx: 'react'}),
            terser(),
        ]
    }
]