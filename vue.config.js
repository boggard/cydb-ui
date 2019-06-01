const config = {
    devServer: {
        compress: true,
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '': {
                target: 'http://localhost:8081',
                timeout: 0,
                proxyTimeout: 0,
                onProxyReq: (proxyReq, req, res) => req.setTimeout(0),
            },
        },
    },
};

module.exports = config;
