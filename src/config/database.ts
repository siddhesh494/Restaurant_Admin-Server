
export const database: any = {
  mongo: {
    url: `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@localcluster.ucn8ohk.mongodb.net/?retryWrites=true&w=majority&appName=LocalCluster`,
    database: process.env.mongoDatabase
  }
  // mysql: {
  //   type: "mysql",
  //   host: process.env.mysqlHost,
  //   port: process.env.mysqlPort,
  //   database: process.env.mysqlDatabase,
  //   password: encodeURIComponent(process.env.mysqlPassword || "siddhesh"),
  //   user: process.env.mysqlUser,
  //   connectTimeout: 100000,
  //   acquireTimeout: 100000,
  //   connectionLimit: 10
  // }
}