const config = {
  development: {
    port: 3600,

    digitalOcean: {
      spaces: {
        name: 'ohsoyka',
        endpoint: 'ams3.digitaloceanspaces.com',
      },
    },
  },

  production: {
    port: 3400,

    git: {
      repo: 'git@github.com:ohsoyka/static.git',
      branch: 'stable',
    },

    server: {
      host: '46.101.99.203',
      username: 'poohitan',
      folder: '~/ohsoyka.com/static',
    },

    pm2: {
      appName: 'ohsoyka-static',
    },

    digitalOcean: {
      spaces: {
        name: 'ohsoyka',
        endpoint: 'ams3.digitaloceanspaces.com',
      },
    },
  },
};

const environment = process.env.NODE_ENV;

module.exports = {
  ...config,
  current: {
    environment,
    ...config[environment],
  },
};
