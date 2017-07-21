import uglify from 'rollup-plugin-uglify';

import config from './rollup.config';

config.plugins.push(
    uglify({
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        },
        mangle: true
    })
);

export default {
    entry: 'src/index.tsx',
    format: 'umd',
    moduleName: 'react-async-component',
    dest: 'dist/index.min.js',
    plugins: config.plugins
};