import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.tsx',
    format: 'umd',
    moduleName: 'AsyncReactComponent',
    dest: 'dist/index.js',
    plugins: [
        resolve({
            customResolveOptions: 'node_modules',
            jsnext: true
        }),
        commonjs({
            // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
            namedExports: {
                
            }
        }),
        typescript(),
        babel({
            exclude: 'node_modules/**',
            externalHelpers: false
        })
    ]
}