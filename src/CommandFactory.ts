import {Command} from './commands/Command';
import {HiCommand} from './commands/HiCommand';
import {HelpCommand} from './commands/HelpCommand';
import {StatusCommand} from './commands/StatusCommand';
import {ErrorCommand} from './commands/ErrorCommand';

export class CommandFactory {
    getCommand(commandName: string): Command {
      switch(commandName){
        case "hi":
          return new HiCommand();
        case "status":
          return new StatusCommand();
        case "help":
          return new HelpCommand();
        default:
          return new ErrorCommand();
      }
    }
}
