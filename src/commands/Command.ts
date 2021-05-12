export interface Command {
    run(): void;
    getContent(): string;
}
