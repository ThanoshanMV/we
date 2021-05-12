import {CommandFactory} from '../CommandFactory';
import { HiCommand } from '../commands/HiCommand';

const assert = require('assert');
// describe: logical grouping of tests
describe('Test command contents', () => {
    it('Hi command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal(new CommandFactory().getCommandContent("hi"), "Welcome to we CLI!");
    });

    it('error command\'s content', () => {
        assert.equal(new CommandFactory().getCommandContent("i"), "Sorry! no keywords found. Please type 'Help' see what I can do for you :)");
    });

    it('status command\'s content', () => {
        assert.equal(new CommandFactory().getCommandContent("status"), "Checkout the status");
    });
});

describe('Test command instance type', () => {
    it('Hi command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommand("hi") instanceof HiCommand), true);
    });

    it('Help command\'s content', () => {
        // assert.equal(actual, expected);
        assert.equal((new CommandFactory().getCommand("help") instanceof HiCommand), false);
    });
});
