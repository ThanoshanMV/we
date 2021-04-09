// our main application

import {CommandFactory} from './CommandFactory';

const chalk = require("chalk");
const args = process.argv;
const commands = ["hi", "help", "status"];
const userArgs = args.slice(2);

// log all CLI arguments
console.log(args);

// log user entered arguments
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

// log errors to the console in red color, if any
function errorLog(error: string) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

// if user doesn't enter any words or words aren't valid ones, prompt help guide and an error message
if (userArgs.length == 0 || commands.indexOf(userArgs[0]) == -1) {
  errorLog("Please follow the help guide!");
  helpGuide();
}
else {
  // valid arg
  // call the command factory and get appropriate command
  const factoryObject = new CommandFactory();
  const commandObject = factoryObject.getCommand(userArgs[0]);
  commandObject.run();
}
