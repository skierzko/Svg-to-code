module.exports = {
  apps: [
    {
      name: "svg-to-code",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 100
    },
  ],
};
