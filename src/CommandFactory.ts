import {Command} from './commands/Command';
import {HiCommand} from './commands/HiCommand';
import {HelpCommand} from './commands/HelpCommand';
import {StatusCommand} from './commands/StatusCommand';
import {ErrorCommand} from './commands/ErrorCommand';
import { FunCommand } from './commands/FunCommand';

export class CommandFactory {
    getCommand(commandName: string): Command {
      switch(commandName){
        case "hi":
          return new HiCommand();
        case "status":
          return new StatusCommand();
        case "help":
          return new HelpCommand();
        case "fun":
          return new FunCommand();
        default:
          return new ErrorCommand();
      }
    }

    getCommandContent(commandName: string): string {
      switch(commandName){
        case "hi":
          return new HiCommand().getContent();
        case "status":
          return new StatusCommand().getContent();
        case "help":
          return new HelpCommand().getContent();
        case "fun":
          return new FunCommand().getContent();
        default:
          return new ErrorCommand().getContent();
      }
    }
}
