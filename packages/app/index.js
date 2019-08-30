const first = require('@ekl/first');
const second = require('@ekl/second');

const app = () => 'Hi from the app';

const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
};

main();

module.exports = { app, main };