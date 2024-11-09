const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration
app.use(
  '/dapi',
  createProxyMiddleware({
    target: 'https://www.swiggy.com',
    changeOrigin: true,
    secure: false, // Ignore self-signed certificates (if any)
    pathRewrite: { '^/dapi': '/dapi' }, // Optional path rewrite
  })
);

// Serve the Parcel bundle
app.use(express.static('dist'));

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
