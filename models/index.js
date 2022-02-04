const Traveler = require('./traveller');
const Trip = require('./trip');
const Location = require('./location');

Trip.belongsTo(Traveler);

Traveler.hasMany(Trip)

Location.hasMany(Traveler);

Location.hasMany(Trip);

Trip.belongsTo(Location);


module.exports = {
    Traveler,
    Trip,
    Location,
};