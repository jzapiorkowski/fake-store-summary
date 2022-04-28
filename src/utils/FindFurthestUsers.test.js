import findTwoFurthestUsers from './FindFurthestUsers';

const users = [
  {
    address: {
      geolocation: { lat: '-37.3159', long: '81.1496' },
      city: 'kilcoole',
      street: 'new road',
      number: 7682,
      zipcode: '12926-3874',
    },
    id: 1,
    email: 'john@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: { firstname: 'john', lastname: 'doe' },
    phone: '1-570-236-7033',
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: '50.3467', long: '-20.1310' },
      city: 'San Antonio',
      street: 'Hunters Creek Dr',
      number: 6454,
      zipcode: '98234-1734',
    },
    id: 4,
    email: 'don@gmail.com',
    username: 'donero',
    password: 'ewedon',
    name: { firstname: 'don', lastname: 'romer' },
    phone: '1-765-789-6734',
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: '40.3467', long: '-40.1310' },
      city: 'san Antonio',
      street: 'adams St',
      number: 245,
      zipcode: '80796-1234',
    },
    id: 5,
    email: 'derek@gmail.com',
    username: 'derek',
    password: 'jklg*_56',
    name: { firstname: 'derek', lastname: 'powell' },
    phone: '1-956-001-1945',
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: '10.3456', long: '20.6419' },
      city: 'fresno',
      street: 'saddle st',
      number: 1342,
      zipcode: '96378-0245',
    },
    id: 7,
    email: 'miriam@gmail.com',
    username: 'snyder',
    password: 'f238&@*$',
    name: { firstname: 'miriam', lastname: 'snyder' },
    phone: '1-123-943-0563',
    __v: 0,
  },
];

test('checks if properly finds the two users living furthest away from each other', () => {
  expect(findTwoFurthestUsers(users)).toStrictEqual([
    users[0],
    users[2],
    122.52372273145284,
  ]);
});
