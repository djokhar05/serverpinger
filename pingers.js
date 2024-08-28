const cron = require("node-cron");
const axios = require("axios");

const servers_to_ping = [
  "https://roundtripzdriverserver.onrender.com",
  "https://roundtripzserver.onrender.com",
  "https://roundtripz-socket.onrender.com",
];

const pingServers = async () => {
  try {
    await Promise.all(
      servers_to_ping.map(async (server, index) => {
        console.log(`Pinging ${server} ...`);
        const response = await axios.get(server);
        console.log(`${index + 1}. ${response.data}`);
      })
    );
    console.log("Pinging Servers Completed");
  } catch (error) {
    // console.log(error);
    console.log("An error occured while pinging the server" + server);
  }
};

pingServers();

console.log("Cron Pingers Being Setup");
module.exports = () => {
  cron.schedule("*/10 * * * *", async () => {
    console.log("Pinging Servers ...");
    await pingServers();
  });
};
