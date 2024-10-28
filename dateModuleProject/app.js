const dateModule = require("./dateModule");

const currentDate = dateModule.getCurrentDate();
const currentTime = dateModule.getCurrentTime();

console.log(`Текущая дата: ${currentDate}`);
console.log(`Текущее время: ${currentTime}`);
