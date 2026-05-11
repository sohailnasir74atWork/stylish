module.exports = {
    apps: [{
        name: "stylishnames",
        cwd: "/var/www/stylishnames",
        script: "node_modules/.bin/next",
        args: "start -p 3000",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "production",
            PORT: 3000,
        },
        max_memory_restart: "500M",
    }]
};
