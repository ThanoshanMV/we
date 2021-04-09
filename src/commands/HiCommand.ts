// export class HiCommand {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     run(): void{
//         console.log(`Welcome to we CLI ${this.name}`);
//     }
// }

import {Command} from './Command';

export class HiCommand implements Command{
    run(): void {
        console.log(`Welcome to we CLI!`);
    }
}
