import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const packagejson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packagejson.main,
                format: 'cjs',
                sourcemap: true,
            },

            {
                file: packagejson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [typescript({tsconfig: './tsconfig.json'}), resolve(), commonjs()]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'esm',
            },
        ],
        plugins: [dts()],
    }

];