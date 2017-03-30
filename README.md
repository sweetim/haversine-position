## Haversine Position 
[![Build Status](https://travis-ci.org/sweetim/haversine-position.svg?branch=master)](https://travis-ci.org/sweetim/haversine-position)
[![codecov](https://codecov.io/gh/sweetim/haversine-position/branch/master/graph/badge.svg)](https://codecov.io/gh/sweetim/haversine-position)
[![devDependency Status](https://david-dm.org/sweetim/haversine-position/dev-status.svg)](https://david-dm.org/sweetim/haversine-position#info=devDependencies)

Convert GPS coordinates into local coordinate system relative to the origin with output of `[x, y]` in `meter`, bearing(`degree`) and distance(`m`)

This module will be useful to quickly convert an GPS coordinates into a local coordinates relative to the origin point.

### Example

#### Typescript
``` typescript
import { Haversine, GpsPoint } from 'haversine-position';

const origin: GpsPoint = {
    lat: 35.826869, 
    lng: 139.688460
};

const p1: GpsPoint = {
    lat: 35.826910, 
    lng: 139.688578
};

const haversine = new Haversine(origin);
haversine.getPosition(p1); // [10.650280913694724, 4.564105542903945]
haversine.getDistance(p1); // 11.587042027514038 m 
haversine.getBearing(p1); // 66.80277554567647 deg

// Using as static method
Haversine.getPosition(origin, p1); // [10.650280913694724, 4.564105542903945]
Haversine.getDistance(origin, p1); // 11.587042027514038 m 
Haversine.getBearing(origin, p1); // 66.80277554567647 deg

```

#### Javascript
``` javascript
const haversinePosition = require('haversine-position');

const origin = {
    lat: 35.826869, 
    lng: 139.688460
};

const p1 = {
    lat: 35.826910, 
    lng: 139.688578
};

const haversine = new haversinePosition.Haversine(origin);
haversine.getPosition(p1); // [10.650280913694724, 4.564105542903945]
haversine.getDistance(p1); // 11.587042027514038 m 
haversine.getBearing(p1); // 66.80277554567647 deg

// Using as static method
haversinePosition.Haversine.getPosition(origin, p1); // [10.650280913694724, 4.564105542903945]
haversinePosition.Haversine.getDistance(origin, p1); // 11.587042027514038 m 
haversinePosition.Haversine.getBearing(origin, p1); // 66.80277554567647 deg

```

### API
#### Haversine.getPosition(origin, next)
Return an array of position `[x, y]` in meter relative to the origin point

#### Haversine.getDistance(origin, next)
Return the distance relative to the origin in `meter`

#### Haversine.getBearing(origin, next)
Return the bearing relative to the origin in `degree`