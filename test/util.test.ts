import * as assert from 'assert';

import { Util } from '../lib/util';

describe('Util', function() {
    describe('#toRadian()', function() {
        it('should return PI when 180 degree', function() {
            assert.strictEqual(Math.PI, Util.toRadian(180));
        });

        it('should return 0 when 0 degree', function() {
            assert.strictEqual(0, Util.toRadian(0));
        });
    });

    describe('#toDegree()', function() {
        it('should return 180 with PI', function() {
            assert.strictEqual(180, Util.toDegree(Math.PI));
        });

        it('should return 0 when 0 degree', function() {
            assert.strictEqual(0, Util.toDegree(0));
        });
    });
});