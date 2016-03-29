import expect from 'expect';
import { default as sinon } from 'sinon';

import {
    runHook,
    runHookDirectly,
    registerHooks,
    getHooks
} from '../../src/hooks';

describe('roc', () => {
    let sandbox, processMock, consoleMock;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        processMock = sandbox.mock(process);
        consoleMock = sandbox.mock(console);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('hooks', () => {
        describe('runHook', () => {
            it('should be function', () => {
                expect(runHook).toBeA('function');
            });

            it('should log and exit if extension has no hooks', () => {
                consoleMock.expects('log').once();
                processMock.expects('exit').once();
                runHook('roc-package-test');
                consoleMock.verify();
                processMock.verify();
            });
        });

        describe('runHookDirectly', () => {
            it('should be a function', () => {
                expect(runHookDirectly).toBeA('function');
            });
        });

        describe('registerHooks', () => {
            it('should be a function', () => {
                expect(registerHooks).toBeA('function');
            });
        });

        describe('getHooks', () => {
            it('should be a function', () => {
                expect(getHooks).toBeA('function');
            });
        });
    });
});
