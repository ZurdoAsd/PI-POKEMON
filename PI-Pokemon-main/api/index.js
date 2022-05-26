//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Types } = require("./src/db.js");
const axios = require("axios");

const precarga = async () => {
  // const url = await axios.get("https://pokeapi.co/api/v2/type");
  // const aux = url.data.results;
  // const resp1pes = aux.map((e) => {
  //   return (obj = {
  //     name:e.name,
  //   });
  // });
//  console.log(resp1pes.flat())
//  Types.bulkCreate(resp1pes);


// const url1 = await axios.get("https://pokeapi.co/api/v2/type");
// const aux = url1.data.results;
// const bum = aux.map(e=>axios(e.url));
// const subConsulta= await Promise.all(bum)
// const resp1pes = subConsulta.map((e) => {
//   return obj = {
//     name:e.data.id,
//     name:e.data.name,
//   };
// });
// console.log(resp1pes)
// Types.bulkCreate(resp1pes);


const tipoos = (await axios.get("https://pokeapi.co/api/v2/type")).data.results.map(e =>({name:e.name + " "}))    
await Types.bulkCreate(tipoos);
};

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
    await precarga();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
