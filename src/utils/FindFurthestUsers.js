function calculateDistance(lat1, lat2, lon1, lon2) {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));
  let r = 6371;

  return c * r;
}

function findTwoFurthestUsers(users) {
  let n = users.length;
  let maxDistance = 0;
  let user1 = {};
  let user2 = {};

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const currentDistance = calculateDistance(
        users[i].address.geolocation.lat,
        users[j].address.geolocation.lat,
        users[i].address.geolocation.long,
        users[j].address.geolocation.long
      );
      if (maxDistance < currentDistance) {
        maxDistance = currentDistance;
        user1 = users[i];
        user2 = users[j];
      }
    }
  }
  return [user1, user2, Math.sqrt(maxDistance)];
}

export default findTwoFurthestUsers;
