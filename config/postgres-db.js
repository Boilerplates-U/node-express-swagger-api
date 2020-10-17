
module.exports = {
  'development': {
    'username': 'node-app-user',
    'password': '44Ro9BmY&z',
    'database': 'app-db',
    'host': 'localhost',
    'dialect': 'postgres'
  },
  test: {
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
}