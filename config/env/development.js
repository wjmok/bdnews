module.exports = {
  mockUser: {
    debug: false,
    user: {
      id: 100,
      name: 'test'
    }
  },

  mysql: {
    name: 'mysql',

    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bdnews',
    charset: 'UTF8MB4',

    debug: [/*'OkPacket', */'ComQueryPacket'],
    log: true
  },

  seq_options: {
    dialectOptions: {
      charset: 'utf8mb4'
    }
  }
};
