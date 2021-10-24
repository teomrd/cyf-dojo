// object
const user = {
  name: 'Theo',
  age: 34  
}

const name = 'Sokratis'; // string 

function sayHello(name, age) {
  const message = `Hi ${name}, age: ${age}`;
  
  return message;
};

const theoHello = sayHello(user.name, 67);
const sokratisGreeting = sayHello(name, 33);

