const numberOfPizzas = require('../exercise');

describe('Extra tests', () => {
  test('Should return empty array on string parameter', () => {
    const result = numberOfPizzas("This is not an array", 8);
    expect(result).toStrictEqual([]);
  });

  test('Should return empty array on number parameter', () => {
    const result = numberOfPizzas(16, 8);
    expect(result).toStrictEqual([]);
  });

  test('Should ignore string on slices property', () => {
    const persons = [
      {
        name: 'Jony',
        slices: 6
      },
      {
        name: 'Ulises',
        slices: 'Not a string'
      },
    ];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(1);
  });

  test('Should ignore person without slices property', () => {
    const persons = [
      {
        name: 'Jony',
        slices: 6
      },
      {
        name: 'Ulises',
      },
    ];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(1);
  });

  test('Should ignore all and return zero', () => {
    const persons = [1, 2, 3, 4];
    const result = numberOfPizzas(persons, 8);
    expect(result).toBe(0);
  });
});
