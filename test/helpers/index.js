import expect from 'expect';
import path, {sep} from 'path';

import {
    getAbsolutePath,
    fileExists,
    getRocPackageDependencies,
    getPackageJson
} from '../../src/helpers';

describe('roc', () => {
    describe('helpers', () => {
        describe('getAbsolutePath', () => {
            it('should correctly append directory if not absolute', () => {
                expect(getAbsolutePath('roc.config.js', '/some/dir'))
                    .toBe(`${sep}some${sep}dir${sep}roc.config.js`);
            });

            it('should not touch an already absolute path', () => {
                expect(getAbsolutePath('/roc.config.js'))
                    .toBe('/roc.config.js');
            });
        });

        describe('fileExists', () => {
            it('should return true if file exists', () => {
                expect(fileExists('index.js', __dirname))
                    .toBe(true);
            });

            it('should return false if file do not exist', () => {
                expect(fileExists('roc.config.js', __dirname))
                    .toBe(false);
            });
        });

        describe('getRocDependencies', () => {
            it('should correctly fetch all the Roc dependencies', () => {
                const packageJson = {
                    dependencies: {
                        'roc': '^1.0.0',
                        'koa': '^2.0.0',
                        'colors': '*',
                        'roc-package-web': '^1.1.0'
                    },
                    devDependencies: {
                        'mocha': '2.3.4',
                        'roc-package-test': '2.0.1'
                    }
                };
                expect(getRocPackageDependencies(packageJson))
                    .toEqual(['roc-package-web', 'roc-package-test']);
            });
        });

        describe('getPackageJson', () => {
            it('should correctly read package.json', () => {
                expect(getPackageJson(path.join(__dirname, '../../')).name)
                    .toBe('roc');
            });
        });
    });
});
