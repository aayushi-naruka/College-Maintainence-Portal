// const redis = require('redis');
// const connectRedis = require('connect-redis');
// const session = require("express-session");
// const redisClient = redis.createClient({
// host: 'localhost', port: 6379
// })
// redisClient.on('error', function (err) {
// console.log('Could not establish a connection with redis. ' + err);
// });
// redisClient.on('connect', function (err) {
//  console.log('Connected to redis successfully');
// });
// module.exports = redisClient
const redis = require("redis");
const redisclient = redis.createClient();
  
(async () => {
    await redisclient.connect();
})();
  
console.log("Connecting to the Redis");
  
redisclient.on("ready", () => {
    console.log("Connected!");
});
  
redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});
 module.exports = redisclient