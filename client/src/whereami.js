const pubLocations = [
    { loc: 'btl', la: 53.709950, lo: -1.622960 },
    { loc: 'dew', la: 53.692040, lo: -1.632837 },
    { loc: 'mir', la: 53.671410, lo: -1.692550 },
    { loc: 'hud', la: 53.648520, lo: -1.784690 },
    { loc: 'swt', la: 53.623840, lo: -1.881580 },
    { loc: 'msn', la: 53.603200, lo: -1.930750 },
    { loc: 'gnf', la: 53.538529, lo: -2.013975 },
    { loc: 'syb', la: 53.484464, lo: -2.062828 }
];

const geoOptions = {
   enableHighAccuracy: true,
   maximumAge : 30000,
   timeout : 27000
};

let checkLocation = (route, callback) => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (myLocation) => {
        let pubDistances = pubLocations.map(function(pubLocation) {
        let pubDistance = {};
        if (route.includes(pubLocation.loc)){
          pubDistance['loc'] = pubLocation.loc;
          pubDistance['distance'] = distance(
            myLocation.coords.longitude,
            myLocation.coords.latitude,
            pubLocation.lo,
            pubLocation.la
          )
        }
        return pubDistance;
        });
    
    var nearest = { distance: Infinity };
    pubDistances.forEach(function(pubDistance) {
      if (pubDistance.distance < nearest.distance) {
        nearest = pubDistance;
      }
    });
      callback(nearest);
    }, notFoundMe, geoOptions);
  }
  
}

let notFoundMe = () => {
  // leave last found station on the screen
}

// Haversine distance function
let distance = (lon1, lat1, lon2, lat2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  var dLon = (lon2-lon1).toRad();
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

module.exports = {
  checkLocation: checkLocation
};