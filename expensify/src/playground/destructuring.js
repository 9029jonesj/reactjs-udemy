// Object Destructurig
/*const person = {
    name: 'Jerrell',
    age: 26,
    location: {
        city: 'Baltimore',
        temp: 93
    }
};

const { name: firstName = 'Anonymous' , age } = person;
const { city, temp: temperature } = person.location;
console.log(name);
console.log(`${firstName} is ${age} living in ${city} where it is ${temperature} degrees.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);*/

// Array Destructuring

const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}. `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price, ] = item;
console.log(`A medium ${coffee} costs ${price}`);