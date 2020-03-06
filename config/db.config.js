module.exports = {
    HOST: "us-cdbr-iron-east-04.cleardb.net",
    USER: "b2eeafdfd6c9f5",
    PASSWORD: "deeca5e8",
    DB: "heroku_1682c7f0ee08936",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  // mysql://b2eeafdfd6c9f5:deeca5e8@us-cdbr-iron-east-04.cleardb.net/heroku_1682c7f0ee08936?reconnect=true