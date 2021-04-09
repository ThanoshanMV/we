import {Command} from './Command';

export class StatusCommand implements Command{
    run(): void {
        console.log(`Checkout the status`);
    }
}
