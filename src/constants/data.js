import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "480₽ | 5500₽",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "380₽ | 4500₽",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "280₽ | 3500₽",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "180₽ | 2500₽",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "180₽ | 2500₽",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "380₽",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "380₽",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "340₽",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "300₽",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "280₽",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
