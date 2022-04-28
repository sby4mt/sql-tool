import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { External } from "./entity/external";

dotenv.config();

const database = new DataSource({
  type: "mysql",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [External],
  synchronize: true
});

database
  .initialize()
  .then(async () => {
    // データ数
    const count = await database.getRepository(External).count();
    console.log(count);
    // answerを文字列に変換
    for (let i = 0; i < count; i++) {
      const data = await database.getRepository(External).find({ skip: i, take: 1});
      if (data && data[0]) {
        switch (data[0].answer) {
          case "0":
            await database.getRepository(External).update(data[0].id, { answer: data[0].s1 });
            break;
          case "1":
            await database.getRepository(External).update(data[0].id, { answer: data[0].s2 });
            break;
          case "2":
            await database.getRepository(External).update(data[0].id, { answer: data[0].s3 });
            break;
          case "3":
            await database.getRepository(External).update(data[0].id, { answer: data[0].s4 });
            break;
        }
      }
    }
    // 接続削除
    await database.destroy();
  })
  .catch((error) => {
    console.error(error);
  });
