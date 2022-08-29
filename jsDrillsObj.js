const data = [
  {
    place: "Melbourne",
    country: "Australia",
    location: {
      lat: "99",
      lng: "88",
    },
    temperature: "38 Degree Celsius",
  },
  {
    place: "New Delhi",
    country: "India",
    location: {
      lat: "84",
      lng: "44",
    },
    temperature: "42 Degree Celsius",
  },
  {
    place: "Pretoria",
    country: "SouthAfrica",
    location: {
      lat: "35",
      lng: "24",
    },
    temperature: "39 Degree Celsius",
  },
  {
    place: "Mexico City",
    country: "Mexico",
    location: {
      lat: "34",
      lng: "38",
    },
    temperature: "43 Degree Celsius",
  },
  {
    place: "London",
    country: "England",
    location: {
      lat: "57",
      lng: "34",
    },
    temperature: "26 Degree Celsius",
  },
];

/*
Note: Make sure not to mutate the array in all of the following questions.


Q1. Get all latitude and longitude of all the places in the following manner.
[{place: (lat, long)}, ...]

Q2. Sort data based on temperature (Low temperature first).

Q3.Rearrange data in the following format
[{ country: { place: { location: {lat, lng }, temperature }}}, ...]

Q4. Change temperature of SouthAfrica "Pretoria" to "49 Degree Celsius".

Q5. Add a new Object in the fourth postiion.
{ 
        place: "Bangalore", 
        country: "India", 
        location: {
            lat: '84',
            lng: '47'
        },
        temperature: '29 Degree Celsius'
 }

 Q6. Delete the third element in the array .
 Q7. Swap elements at position 2 and second last.
*/

// Q. 1

const data1 = [...data];
/*
const result1 = data1.reduce((acc, cv) => {
  const { place, location, ...rest } = cv;
  const newPlace = {};
  newPlace[place] = [location.lat, location.lng];
  acc.push(newPlace);
  return acc;
}, []);

console.log(result1);
*/
// Q. 2

/*
function getTemp(str) {
  return parseInt(str.split(" ")[0]);
}

data1.sort((a, b) => getTemp(a.temperature) - getTemp(b.temperature));

console.log(data1);
*/

// Q. 3
/*
const data2 = [...data];

const result3 = data2.reduce((acc, cv) => {
  const { country, place, location, temperature } = cv;
  const rearrangedPlace = {};
  rearrangedPlace[place] = {
    location: { ...location },
    temperature: temperature,
  };
  const rearrangedCountry = {};
  rearrangedCountry[country] = rearrangedPlace;
  acc.push(rearrangedCountry);
  return acc;
}, []);

console.log(result3);
*/

// Q. 4
/*
const newData4 = data.reduce((acc, cv) => {
  let { place, temperature, ...rest } = cv;
  if (place === "Pretoria") temperature = "49 Degree Celsius";
  const newPlace = {
    place: place,
    temperature: temperature,
    ...rest,
  };
  acc.push(newPlace);
  return acc;
}, []);

console.log(newData4);
*/

// Q. 5
/*
const newData5 = data.reduce((acc, cv, ci) => {
  if (ci === 3) {
    acc.push({
      place: "Bangalore",
      country: "India",
      location: {
        lat: "84",
        lng: "47",
      },
      temperature: "29 Degree Celsius",
    });
  }
  acc.push(cv);
  return acc;
}, []);

console.log(newData5);
*/

// Q. 6
/*
const newData6 = data.reduce((acc, cv, ci) => {
  if (ci !== 2) {
    acc.push(cv);
  }
  return acc;
}, []);

console.log(newData6);
*/

// Q. 7

const secondLast = data.length - 2;
const newData7 = data.reduce((acc, cv, ci) => {
  if (ci === 1) {
    acc[secondLast] = cv;
  } else if (ci === secondLast) {
    acc[1] = cv;
  } else {
    acc[ci] = cv;
  }
  return acc;
}, []);

console.log(newData7);
