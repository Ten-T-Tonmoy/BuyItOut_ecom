//bought items can be rated only

// role: "buyer",

export const userInfo = {
  userId: "u1",
  name: "Bill Saxby",
  address: "123 Main Street, Downtown, City 12345",
  phone: "555-0123",
  email: "whatever@email.com",
  profilePic: "/images/users/u1-profile.jpg",
  favorites: ["p2", "p7", "p20", "p28", "p43"], // Smartphone, Tablet, Coffee Maker, Face Cream, Fiction Novel
  ratings: [
    { productId: "p1", givenRating: 4 }, // Wireless Headphones
    { productId: "p3", givenRating: 5 }, // Laptop
    { productId: "p6", givenRating: 4 }, // Gaming Mouse
    { productId: "p10", givenRating: 4 }, // USB-C Hub
    { productId: "p19", givenRating: 5 }, // Blender
    { productId: "p25", givenRating: 4 }, // Curtains
    { productId: "p31", givenRating: 4 }, // Foundation
    { productId: "p36", givenRating: 4 }, // Dumbbells
    { productId: "p40", givenRating: 5 }, // Resistance Bands
    { productId: "p46", givenRating: 4 }, // Science Textbook
  ],
  cart: [
    { productId: "p12", quantity: 1 }, // Women's Dress
    { productId: "p20", quantity: 1 }, // Coffee Maker
    { productId: "p35", quantity: 2 }, // Yoga Mat
    { productId: "p43", quantity: 1 }, // Fiction Novel
  ],
  purchaseHistory: [
    { productId: "p1", date: "2024-01-15", quantity: 2 }, // Wireless Headphones
    { productId: "p3", date: "2024-02-05", quantity: 1 }, // Laptop
    { productId: "p6", date: "2024-02-08", quantity: 1 }, // Gaming Mouse
    { productId: "p10", date: "2024-02-03", quantity: 1 }, // USB-C Hub
    { productId: "p11", date: "2024-01-12", quantity: 2 }, // Men T-Shirt
    { productId: "p18", date: "2024-02-08", quantity: 1 }, // Watch
    { productId: "p19", date: "2024-01-14", quantity: 1 }, // Blender
    { productId: "p25", date: "2024-02-11", quantity: 1 }, // Curtains
    { productId: "p31", date: "2024-02-01", quantity: 1 }, // Foundation
    { productId: "p36", date: "2024-01-16", quantity: 1 }, // Dumbbells
    { productId: "p40", date: "2024-02-14", quantity: 1 }, // Resistance Bands
    { productId: "p46", date: "2024-02-01", quantity: 1 }, // Science Textbook
  ],
};
