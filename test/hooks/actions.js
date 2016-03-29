import expect from 'expect';

import {
    registerActions,
    registerAction,
    removeActions
} from '../../src/hooks/actions';

describe('roc', () => {
    describe('hook actions', () => {
        describe('registerActions', () => {
            it('should be function', () => {
                expect(registerActions).toBeA('function');
            });
        });

        describe('registerAction', () => {
            it('should be a function', () => {
                expect(registerAction).toBeA('function');
            });
        });

        describe('removeActions', () => {
            it('should be a function', () => {
                expect(removeActions).toBeA('function');
            });
        });
    });
});
