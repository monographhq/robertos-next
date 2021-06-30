const fs = require('fs');
const faker = require('faker');

const VENDORS = [
  {
    name: "Prop Labs Kolsch Beer Yeast",
    ingredients: ["YEAST"],
    source: {
      api: "REST",
      frequency: "Daily"
    }
  },
  {
    name: "Crudo Ogliarolo",
    ingredients: ["OLIVE_OIL"],
    source: {
      api: "PHONE",
      frequency: "Sporadic"
    }
  },
  {
    name: "San Marzano Whole Tomatoes",
    ingredients: ["TOMATOES"],
    source: {
      api: "WEBHOOK",
      frequency: "Live"
    }
  },
  {
    name: "Sonoma Farms",
    ingredients: ["MOZZARELLA"],
    source: {
      api: "SMS",
      frequency: "Sporadic"
    }
  },
  {
    name: "Oakland Farmer's Market",
    ingredients: ["BASIL"],
    source: {
      api: "EMAIL",
      frequency: "Seasonal"
    }
  },
]

const QUALITY = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'D', 'F'];

const entries = Array(50).fill(0).map((_, i) => {
  const date = faker.date.between('2021-01-01', '2021-06-30');
  const vendor = faker.random.arrayElement(VENDORS);
  const quality = faker.random.arrayElement(QUALITY);
  const count = faker.datatype.number(200);
  const notes = faker.company.catchPhrase();

  return {
    date,
    ingredient: vendor?.ingredients[0],
    count,
    quality,
    vendor,
    notes
  }
});


fs.writeFile('./pages/api/entries.json', JSON.stringify(entries), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})