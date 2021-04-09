import {Command} from './commands/Command';
import {HiCommand} from './commands/HiCommand';
import {HelpCommand} from './commands/HelpCommand';
import {StatusCommand} from './commands/StatusCommand';

export class CommandFactory {
    getCommand(commandName: string): Command {
          if (commandName === "hi"){
            console.log('HI COMMAND RECEIVED!');
            return new HiCommand();
          }
          else if (commandName === "status"){
            return new StatusCommand();
          }
          else {
            return new HelpCommand();
          }
    }
}
