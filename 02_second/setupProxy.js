const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/dapi',
        createProxyMiddleware({
            target: 'https://www.swiggy.com',
            changeOrigin: true,  // This ensures the origin header is changed to match the target
            secure: false,  // If the target uses HTTPS
            pathRewrite: {
                '^/dapi': '/dapi',  // Rewrite the path (optional)
            },
        })
    );
};
