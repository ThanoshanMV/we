import {CommandFactory} from '../CommandFactory';
import { ErrorCommand } from '../commands/ErrorCommand';
import { FunCommand } from '../commands/FunCommand';
import { HelpCommand } from '../commands/HelpCommand';
import { HiCommand } from '../commands/HiCommand';
import { StatusCommand } from '../commands/StatusCommand';

const assert = require('assert');
// describe: logical grouping of tests
describe('Test Error Command', () => {
    it('Error command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommandContent("randomStuff")), "Sorry! no keywords found. Please type 'Help' see what I can do for you :)");
    });

    it('Error command\'s type', () => {
        assert.equal((new CommandFactory().getCommand("randomStuff") instanceof ErrorCommand), true);
    });
});

describe('Test Help Command', () => {
    it('Help command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommandContent("help")), "we is a friendly CLI! usage: we <command> commands can be: hi: used to welcome to the userhelp: used to print the usage guide");
    });

    it('Help command\'s type', () => {
        assert.equal((new CommandFactory().getCommand("help") instanceof HelpCommand), true);
    });
});

describe('Test Hi Command', () => {
    it('Hi command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommandContent("hi")), "Welcome to we CLI!");
    });

    it('Hi command\'s type', () => {
        assert.equal((new CommandFactory().getCommand("hi") instanceof HiCommand), true);
    });
});

describe('Test Status Command', () => {
    it('Status command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommandContent("status")), "Checkout the status");
    });

    it('Status command\'s type', () => {
        assert.equal((new CommandFactory().getCommand("status") instanceof StatusCommand), true);
    });
});

describe('Test Fun Command', () => {
    it('Fun command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommandContent("fun")), "This is a command to make you fun");
    });

    it('Fun command\'s type', () => {
        assert.equal((new CommandFactory().getCommand("fun") instanceof FunCommand), true);
    });
});