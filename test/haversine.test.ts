import * as assert from 'assert';

import { Haversine, GpsPoint } from '../lib';

describe('Haversine', function() {
    let haversine: Haversine;
    let origin: GpsPoint;
    let p1: GpsPoint;
    let p2: GpsPoint;

    before(function() {
        origin = {
            lat: 35.826869, 
            lng: 139.688460
        };

        p1 = {
            lat: 35.826910, 
            lng: 139.688578
        };

        p2 = {
            lat: 35.827032, 
            lng: 139.688402
        };
    });

    beforeEach(function() {
        haversine = new Haversine(origin);
    });

    describe('#getPosition()', function() {
        it('should return the coordinate relative to origin', function() {
            assert.deepStrictEqual([10.650280913694724, 4.564105542903945], haversine.getPosition(p1));
            assert.deepStrictEqual([-5.234875791379699, 18.14507855017794], haversine.getPosition(p2));
            
            assert.deepStrictEqual([10.650280913694724, 4.564105542903945], Haversine.getPosition(origin, p1));
            assert.deepStrictEqual([-5.234875791379699, 18.14507855017794], Haversine.getPosition(origin, p2));
        });
    });

    describe('#getDistance()', function() {
        it('should return the distance relative to the origin', function() {
            assert.strictEqual(11.587042027514038, haversine.getDistance(p1));
            assert.strictEqual(18.885121131284826, haversine.getDistance(p2));

            assert.strictEqual(11.587042027514038, Haversine.getDistance(origin, p1));
            assert.strictEqual(18.885121131284826, Haversine.getDistance(origin, p2));
        });
    });

    describe('#getBearing()', function() {
        it('should return the bearing relative to the origin', function() {
            assert.strictEqual(66.80277554567647, haversine.getBearing(p1));
            assert.strictEqual(343.9070891348759, haversine.getBearing(p2));

            assert.strictEqual(66.80277554567647, Haversine.getBearing(origin, p1));
            assert.strictEqual(343.9070891348759, Haversine.getBearing(origin, p2));
        });
    });
});