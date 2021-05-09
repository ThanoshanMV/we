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
          break;
        case "hi":
          return new StatusCommand();
          break;
        case "help":
          return new HelpCommand();
          break;
        default:
          // throw error
          return new ErrorCommand();
      }
    }
}
