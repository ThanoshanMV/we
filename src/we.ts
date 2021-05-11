import {CommandFactory} from './CommandFactory';

const chalk = require("chalk");
const args = process.argv;
const userArgs = args.slice(2);

// log all CLI arguments
// console.log(args);

// log user entered arguments
// console.log(userArgs);

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

// if user doesn't enter any words (just executes the executable file by entering 'we'), welcome them with a help guide :D
if (userArgs.length == 0) {
  helpGuide();
}
else {
  // call the command factory and get appropriate command
  const factoryObject = new CommandFactory();
  const commandObject = factoryObject.getCommand(userArgs[0]);
  commandObject.run();
}
