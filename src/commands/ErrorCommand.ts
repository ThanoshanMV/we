import {Command} from './Command';

export class ErrorCommand implements Command {
    run(): void {
        const errorText = `Sorry! no keywords found. Please type 'Help' see what I can do for you :)`;
        console.log(errorText);
    }

    getContent(): string {
        return "Sorry! no keywords found. Please type 'Help' see what I can do for you :)";
    }
}
