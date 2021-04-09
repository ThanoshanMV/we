// our main application

import {CommandFactory} from './CommandFactory';

const chalk = require("chalk");
const args = process.argv;
const commands = ["hi", "help", "status"];
const userArgs = args.slice(2);

console.log(userArgs);

// the help guide
const helpGuide = function () {
  const helpText = `
    we is a friendly CLI!
  
    usage:
      we <command>
  
      commands can be:
  
      hi:       used to welcome to the user
      help:     used to print the usage guide
    `;
  console.log(helpText);
};

// log errors to the console in red color
function errorLog(error: string) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

// if user entered CLI args are zero or args isn't valid one, prompt help guide and an error message
if (userArgs.length == 0 || commands.indexOf(userArgs[0]) == -1) {
  errorLog("Please follow the help guide!");
  helpGuide();
}
else {
  // valid arg
  // call the command factory
  const factoryObject = new CommandFactory();
  const commandObject = factoryObject.getCommand(userArgs[0]);
  commandObject.run();
}
