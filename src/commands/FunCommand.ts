import {Command} from './Command';

export class FunCommand implements Command {
    run(): void {
        console.log(`This is a command to make you fun!`);
    }

    getContent(): string {
        return "This is a command to make you fun!";
    }
}
