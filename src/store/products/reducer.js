const initialState = [
  {
    id: 1,
    name: "happy birthday - vehicles",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-15-om-11.37.08-723x1024.png",
    price: 1.5,
    tags: ["birthday", "all-ages"],
    categories: ["birthday"],
    popularity: 220,
  },
  {
    id: 2,
    name: "wedding-mermaids",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.17.52-723x1024.png",
    price: 1.5,
    tags: ["wedding"],
    categories: ["wedding"],
    popularity: 50,
  },
  {
    id: 3,
    name: "baby-boy",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.08.32-726x1024.png",
    price: 1.5,
    tags: ["baby", "boy"],
    categories: ["baby"],
    popularity: 101,
  },
  {
    id: 4,
    name: "baby-girl",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/03/Schermafbeelding-2019-03-09-om-21.20.32-727x1024.png",
    price: 1.5,
    tags: ["baby", "girl"],
    categories: ["baby"],
    popularity: 100,
  },
  {
    id: 5,
    name: "christmas-tree",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/09/Schermafbeelding-2019-09-11-om-15.06.05-728x1024.png",
    price: 1.5,
    tags: ["christmas", "new-years", "holidays"],
    categories: ["christmas"],
    popularity: 500,
  },
  {
    id: 6,
    name: "stroller",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18735.jpg",
    price: 1.75,
    tags: ["baby", "boy", "girl"],
    categories: ["baby"],
    popularity: 160,
  },
  {
    id: 7,
    name: "carriage",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.37.00-1024x683.png",
    price: 1.75,
    tags: ["baby", "girl"],
    categories: ["baby"],
    popularity: 90,
  },
  {
    id: 8,
    name: "baby delivery",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.37.17-1024x722.png",
    price: 1.75,
    tags: ["baby", "boy"],
    categories: ["baby"],
    popularity: 95,
  },
  {
    id: 9,
    name: "have a cool birthday",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.42.56-736x1024.png",
    price: 1.5,
    tags: ["birthday", "all-ages"],
    categories: ["birthday"],
    popularity: 115,
  },
  {
    id: 10,
    name: "birthday fox",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0001-11840.jpg",
    price: 1.5,
    tags: ["birthday", "all-ages"],
    categories: ["birthday"],
    popularity: 165,
  },
  {
    id: 11,
    name: "birthday pineapple",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0001-11841.jpg",
    price: 1.5,
    tags: ["birthday", "all-ages"],
    categories: ["birthday"],
    popularity: 165,
  },
  {
    id: 12,
    name: "celestial birthday",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.40.18-732x1024.png",
    price: 1.5,
    tags: ["birthday", "all-ages"],
    categories: ["birthday"],
    popularity: 175,
  },
  {
    id: 13,
    name: "dinner party",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.48.08-731x1024.png",
    price: 1.5,
    tags: ["congratulations"],
    categories: ["congratulations"],
    popularity: 175,
  },
  {
    id: 14,
    name: "birthday music",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.54.44-1024x731.png",
    price: 1.75,
    tags: ["birthday", "all-ages", "music"],
    categories: ["birthday"],
    popularity: 211,
  },
  {
    id: 15,
    name: "birthday queen",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.43.18-732x1024.png",
    price: 1.5,
    tags: ["birthday", "women"],
    categories: ["birthday"],
    popularity: 222,
  },
  {
    id: 16,
    name: "happy-birthday-elephants-pink",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.18.15-1024x729.png",
    price: 1.75,
    tags: ["birthday", "twins", "children", "pink"],
    categories: ["birthday"],
    popularity: 78,
  },
  {
    id: 17,
    name: "happy-birthday-elephants-blue",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-19-om-14.02.09-1024x724.png",
    price: 1.75,
    tags: ["birthday", "twins", "children", "blue"],
    categories: ["birthday"],
    popularity: 60,
  },
  {
    id: 18,
    name: "smile bitch",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.51.13-730x1024.png",
    price: 1.5,
    tags: [],
    categories: [],
    popularity: 79,
  },
  {
    id: 19,
    name: "vegan vibes",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.43.43-731x1024.png",
    price: 1.5,
    tags: ["vegan"],
    categories: [],
    popularity: 49,
  },
  {
    id: 20,
    name: "coffee stand",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18736.jpg",
    price: 1.75,
    tags: ["coffee"],
    categories: [],
    popularity: 88,
  },
  {
    id: 21,
    name: "Utrecht skyline",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18713.jpg",
    price: 2.0,
    tags: ["city"],
    categories: [],
    popularity: 411,
  },
  {
    id: 22,
    name: "flowers on table",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18730.jpg",
    price: 1.5,
    tags: [],
    categories: [],
    popularity: 111,
  },
  {
    id: 23,
    name: "lots of luck",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url: "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18725.jpg",
    price: 1.5,
    tags: ["good luck"],
    categories: ["wishes"],
    popularity: 290,
  },
  {
    id: 24,
    name: "good luck",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.45.19-732x1024.png",
    price: 1.5,
    tags: ["good luck"],
    categories: ["wishes"],
    popularity: 290,
  },
  {
    id: 25,
    name: "you are beautiful",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.44.20-1024x731.png",
    price: 1.75,
    tags: [],
    categories: [],
    popularity: 190,
  },
  {
    id: 26,
    name: "bon voyage",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.46.08-733x1024.png",
    price: 1.5,
    tags: [],
    categories: [],
    popularity: 99,
  },
  {
    id: 27,
    name: "oops sorry",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.44.54-733x1024.png",
    price: 1.5,
    tags: [],
    categories: ["apologies"],
    popularity: 99,
  },
  {
    id: 28,
    name: "get well soon",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.54.06-731x1024.png",
    price: 1.5,
    tags: ["illness", "Dutch"],
    categories: ["wishes"],
    popularity: 233,
  },
  {
    id: 29,
    name: "who run the world?",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.55.31.png",
    price: 1.5,
    tags: ["girl power"],
    categories: [],
    popularity: 150,
  },
  {
    id: 30,
    name: "hug",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.46.33-1024x731.png",
    price: 1.75,
    tags: [],
    categories: [],
    popularity: 289,
  },
  {
    id: 31,
    name: "tree house",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.50.33-732x1024.png",
    price: 1.5,
    tags: ["congratulations"],
    categories: ["congratulations"],
    popularity: 289,
  },
  {
    id: 32,
    name: "girl power",
    description:
      "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.49.20-730x1024.png",
    price: 1.5,
    tags: ["girl power"],
    categories: [],
    popularity: 600,
  },
];

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "ADD_PRODUCT": // the payload will be a product object
      return [...state, { ...payload }];
    case "REMOVE_PRODUCT": // the payload will be a number that should be a product id
      return state.filter((product) => {
        return product.id !== payload;
      });
    default:
      return state;
  }
}
