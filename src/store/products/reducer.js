const initialState = [
  {
    id: 1,
    name: "happy-birthday-cars",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-15-om-11.37.08-723x1024.png",
    price: 1.5,
    tags: ["birthday", "all-ages"],
  },
  {
    id: 2,
    name: "happy-birthday-elephants-pink",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.18.15-1024x729.png",
    price: 1.5,
    tags: ["birthday", "twins", "children", "pink"],
  },
  {
    id: 3,
    name: "happy-birthday-elephants-blue",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-19-om-14.02.09-1024x724.png",
    price: 1.5,
    tags: ["birthday", "twins", "children", "blue"],
  },
  {
    id: 4,
    name: "wedding-mermaids",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.17.52-723x1024.png",
    price: 1.5,
    tags: ["wedding"],
  },
  {
    id: 5,
    name: "baby-boy",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.08.32-726x1024.png",
    price: 1.5,
    tags: ["baby", "boy"],
  },
  {
    id: 6,
    name: "baby-girl",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/03/Schermafbeelding-2019-03-09-om-21.20.32-727x1024.png",
    price: 1.5,
    tags: ["baby", "girl"],
  },
  {
    id: 7,
    name: "christmas-tree",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/09/Schermafbeelding-2019-09-11-om-15.06.05-728x1024.png",
    price: 1.5,
    tags: ["christmas", "new-years", "holidays"],
  },
];

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    default:
      return state;
  }
}
