export const HOTEL_INFO = {
  description:
    'The Residence Tunis is a luxurious beachfront hotel located near the shores of Gammarth. Offering a perfect blend of elegance and modern comfort, it provides an authentic Tunisian experience with world-class hospitality. The hotel features a renowned spa, a championship golf course, and stunning views of the Mediterranean Sea',
  hotelPolicy: {
    checkIn: '2:00 PM',
    checkout: '12:00 PM',
    rules: [
      'Couples are welcome',
      'Guests must present a valid ID or passport upon check-in.',
      'Only Tunisian Nationals are allowed to book local rates.',
    ],
  },
  cancellationPolicy: [
    'For cancellations made before 9 AM on the selected date, a full refund is available.',
    'For cancellations made after 9 AM on the selected date, the booking is non-refundable.',
  ],
};

export const HOTEL_DATA = {
  hotel: {
    id: 1,
    name: 'The Residence Tunis Hotel & Spa',
    city: 'Tunis',
    photos: [
      'https://r1imghtlak.mmtcdn.com/aba17ca69e8111eba9520242ac110003.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/qoprlwskpwsv.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/xdoguigmygyh.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/waqmgwqnmcdg.jpg',
      'https://r1imghtlak.mmtcdn.com/b0605782196611e992b90242ac110003.jpg',
      'https://r1imghtlak.mmtcdn.com/6a5cc9aa-de68-4950-8106-40ba176f497e.jpg',
    ],
    amenities: ['AC', 'Lake View', 'Pool Area', 'Outdoor', 'Facade', 'Spa'],
    contactInfo: {
      address: 'Les Cotes de Carthage, Gammarth 1057',
      phoneNumber: '+216 71 560 916',
      email: 'contact@Residencetunis.com',
      location: '36.7998,10.1660',
    },
    active: true,
  },
  rooms: [
    {
      id: 1,
      type: 'Almond Delux Room',
      photos: [
        'https://i.travelapi.com/lodging/1000000/530000/523000/522986/a77aa84f_z.jpg',
        'https://r1imghtlak.mmtcdn.com/3d0034e49e8211eb98ce0242ac110002.jpg',
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705141436028514-75dcd5c5-c975-49c9-8e60-dfa39468bcf4.jpg',
        'https://r1imghtlak.mmtcdn.com/c59164a4250511ec91a00a58a9feac02.jpg',
      ],
      amenities: [
        'WiFi',
        'Air Conditioning',
        'Spa',
        'Fireplace',
        'Kids area',
        'Dining',
        'Minibar',
      ],
      price: 850.0,
      isSelected: true,
    },
    {
      id: 2,
      type: 'Presidential Suite',
      photos: [
        'https://r1imghtlak.mmtcdn.com/3d0034e49e8211eb98ce0242ac110002.jpg',
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705141436028514-75dcd5c5-c975-49c9-8e60-dfa39468bcf4.jpg',
        'https://r1imghtlak.mmtcdn.com/c59164a4250511ec91a00a58a9feac02.jpg',
      ],
      amenities: [
        'Gym',
        'King-size Bed',
        'WiFi',
        'Air Conditioning',
        'Spa',
        'Fireplace',
        'Kids area',
        'Dining',
        'Minibar',
      ],
      price: 1700.0,
    },
  ],
};
