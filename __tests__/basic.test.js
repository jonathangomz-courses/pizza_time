const numberOfPizzas = require('../exercise');

describe('Basic tests', () => {

  test('Should return five pizzas', () => {
    const persons = [
      {
        name: 'Jony',
        slices: 6
      },
      {
        name: 'Adrianita',
        slices: 8
      },
      {
        name: 'Ulises',
        slices: 4
      },
    ];
    const result = numberOfPizzas(persons, 4);
    expect(result).toBe(5);
  });

  test('Should return four pizzas', () => {
    const persons = [
      {
        name: 'Jony',
        slices: 6
      },
      {
        name: 'Adrianita',
        slices: 8
      },
      {
        name: 'Ulises',
        slices: 4
      },
    ];
    const result = numberOfPizzas(persons, 5);
    expect(result).toBe(4);
  });

  test('Should return three pizzas', () => {
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
        slices: 5
      },
      {
        name: 'Andres',
        slices: 5
      }
    ];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(3);
  });

  test('Should return two pizzas', () => {
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
        slices: 5
      },
    ];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(2);
  });

  test('Should return one pizza', () => {
    const persons = [
      {
        name: 'Jony',
        slices: 6
      },
    ];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(1);
  });
});
