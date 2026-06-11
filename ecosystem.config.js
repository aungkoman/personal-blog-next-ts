module.exports = {
  apps: [
    {
      name: "personal-blog-next",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/frontend/personal-blog-next-ts", // Corrected path
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};