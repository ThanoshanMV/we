import {Command} from './Command';

export class HelpCommand implements Command{
    run(): void {
        const helpText = `
        we is a friendly CLI!
      
        usage:
          we <command>
      
          commands can be:
      
          hi:       used to welcome to the user
          help:     used to print the usage guide
        `;
      console.log(helpText);
    }
}
