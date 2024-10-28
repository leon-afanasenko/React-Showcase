function getCurrentDate() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

function getCurrentTime() {
  const date = new Date();
  return date.toTimeString().split(" ")[0];
}

module.exports = {
  getCurrentDate,
  getCurrentTime,
};
