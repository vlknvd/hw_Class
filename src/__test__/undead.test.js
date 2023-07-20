import Undead from '../js/Undead';

test('health', () => {
  const undead = new Undead('Qwerty', 'Undead');
  expect(() => {
    expect(undead.health).toEqual(100);
  });
});

test('level', () => {
  const undead = new Undead('Qwerty', 'Undead');
  expect(() => {
    expect(undead.level).toEqual(1);
  });
});

test('attack', () => {
  const undead = new Undead('Qwerty', 'Undead');
  expect(() => {
    expect(undead.attack).toEqual(25);
  });
});

test('defence', () => {
  const undead = new Undead('Qwerty', 'Undead');
  expect(() => {
    expect(undead.defence).toEqual(25);
  });
});
