const webpack = require('webpack');

module.exports = {
    // Other configurations...
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
};
