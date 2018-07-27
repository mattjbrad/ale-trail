const hash = require('object-hash');

const pubs = ['syb', 'gnf', 'msn', 'swt', 'hud', 'mir', 'dew', 'btl'];
// const pubs = ['syb', 'gnf', 'msn'];

const getRoutes = (pubs) => pubs.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [...set,value])
        ),
        [[]]
    );

const addDirection = (arr, direction) => {
    return arr.map((route) => ({dir:direction, route : route} ));
}

const stops = getRoutes(pubs);
let routes = [...addDirection(stops, 'east'), ...addDirection(stops, 'west')];

const lookup = {};
routes.forEach((route) => {
    lookup[hash(route)] = route;
});

console.log('Routes have been generated succesfully');

module.exports.lookup = lookup;