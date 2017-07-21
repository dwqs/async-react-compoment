import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import config from './rollup.config';

config.plugins.push(
    uglify({
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        },
        mangle: true
    }, minify)
);

export default {
    entry: 'src/index.tsx',
    format: 'umd',
    moduleName: 'ReactAsyncComponent',
    dest: 'dist/index.min.js',
    plugins: config.plugins
};