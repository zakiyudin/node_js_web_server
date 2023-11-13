const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "",
      database: "esp32",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;