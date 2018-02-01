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
    port: 3100,

    git: {
      repo: 'git@github.com:ohsoyka/static.git',
      branch: 'stable',
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

module.exports = Object.assign({}, config, {
  current: Object.assign({ environment }, config[environment]),
});
