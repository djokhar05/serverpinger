const cron = require("node-cron");
const axios = require("axios");

const servers_to_ping = [
  "https://roundtripzdriverserver.onrender.com",
  "https://roundtripzserver.onrender.com",
  "https://roundtripz-socket.onrender.com",
];
let currentServer = "";

const pingServers = async () => {
  try {
    await Promise.all(
      servers_to_ping.map(async (server, index) => {
        currentServer = server;
        console.log(`Pinging ${server} ...`);
        const response = await axios.get(server);
        console.log(`${index + 1}. ${response.data}`);
      })
    );
    console.log("Pinging alls Servers Completed");
  } catch (error) {
    // console.log(error);
    console.log("An error occured while pinging the server" + currentServer);
  }
};
pingServers();

// console.log("Cron Pingers Being Setup");
// module.exports = () => {
//   cron.schedule("*/5 * * * *", async () => {
//     console.log("Pinging Servers ...");
//     await pingServers();
//   });
// };
