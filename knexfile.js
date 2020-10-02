// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "cars",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },
};
