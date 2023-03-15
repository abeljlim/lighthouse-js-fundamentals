function chooseStations(stations) {
  // In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
  let goodStations = [];
  for(let station of stations) {
    let name = station[0];
    let capacity = station[1];
    let venueType = station[2];
    if(capacity >= 20 && (venueType === 'school' || venueType === 'community centre')) {
      goodStations.push(name);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));