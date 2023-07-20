import Magician from '../js/Magician';

test('health', () => {
  const magician = new Magician('Qwerty', 'Magician');
  expect(() => {
    expect(magician.health).toEqual(100);
  });
});

test('level', () => {
  const magician = new Magician('Qwerty', 'Magician');
  expect(() => {
    expect(magician.level).toEqual(1);
  });
});

test('attack', () => {
  const magician = new Magician('Qwerty', 'Magician');
  expect(() => {
    expect(magician.attack).toEqual(10);
  });
});

test('defence', () => {
  const magician = new Magician('Qwerty', 'Magician');
  expect(() => {
    expect(magician.defence).toEqual(40);
  });
});
