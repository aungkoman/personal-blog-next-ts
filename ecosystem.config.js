module.exports = {
  apps: [
    {
      name: "personal-blog-next",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/crm/frontend/personal-blog-next-ts",
      instances: "max",         // Spawns an instance for every available CPU core
      exec_mode: "cluster",     // Enables load-balancing cluster mode
      watch: false,             // Do not watch files in production to avoid restart loops
      max_memory_restart: "1G", // Restart the app safely if memory usage leaks past 1GB
      env: {
        NODE_ENV: "production",
        PORT: 3000              // Matches your Apache reverse proxy configuration
      }
    }
  ]
};