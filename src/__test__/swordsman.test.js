import Swordsman from '../js/Swordsman';

test('health', () => {
  const swordsman = new Swordsman('Qwerty', 'Swordsman');
  expect(() => {
    expect(swordsman.health).toEqual(100);
  });
});

test('level', () => {
  const swordsman = new Swordsman('Qwerty', 'Swordsman');
  expect(() => {
    expect(swordsman.level).toEqual(1);
  });
});

test('attack', () => {
  const swordsman = new Swordsman('Qwerty', 'Swordsman');
  expect(() => {
    expect(swordsman.attack).toEqual(40);
  });
});

test('defence', () => {
  const swordsman = new Swordsman('Qwerty', 'Swordsman');
  expect(() => {
    expect(swordsman.defence).toEqual(10);
  });
});
