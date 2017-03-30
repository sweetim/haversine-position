### Haversine Position

Convert GPS coordinates into local coordinate system relative to the origin with output of `[x, y]` in `meter`, bearing(`degree`) and distance(`m`)

This module will be useful to quickly convert an GPS coordinates into a local coordinates relative to the origin point.

#### Example

``` typescript
const Haversine = require('haversine-position'); 

const origin = {
    lat: 35.826869, 
    lng: 139.688460
};

const p1 = {
    lat: 35.826910, 
    lng: 139.688578
};

const haversine = new Haversine(origin);
haversine.getPosition(p1); // [10.650280913694724, 4.564105542903945]
haversine.getDistance(p1); // 11.587042027514038 m 
haversine.getBearing(p1)); // 66.80277554567647 deg

// Using as static method
Haversine.getPosition(origin, p1); // [10.650280913694724, 4.564105542903945]
Haversine.getDistance(origin, p1); // 11.587042027514038 m 
Haversine.getBearing(origin, p1); // 66.80277554567647 deg

```

#### Haversine.getPosition(origin, next)
Return an array of position `[x, y]` in meter relative to the origin point

#### Haversine.getDistance(origin, next)
Return the distance relative to the origin in `meter`

#### Haversine.getBearing(origin, next)
Return the bearing relative to the origin in `degree`