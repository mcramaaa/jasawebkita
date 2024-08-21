module.exports = {
  apps: [
    {
      name: "dev-alpha-landing",
      script: "yarn",
      args: "start:prod",
      cwd: "/var/www/whitelabel/alpha-landing",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
