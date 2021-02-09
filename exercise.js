function numberOfPizzas(persons, slicesPerPizza){
  // Your logic goes here...
}

(function () {
  const persons = [
    {
      name: 'Jony',
      slices: 6
    },
    {
      name: 'Adrianita',
      slices: 4
    },
    {
      name: 'Ulises',
      slices: 3
    },
    {
      name: 'Andres',
      slices: 5
    }
  ];
  const res = numberOfPizzas(persons, 8);
  console.log(res);
})()

module.exports = numberOfPizzas;
