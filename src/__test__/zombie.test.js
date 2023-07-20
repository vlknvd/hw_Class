import Zombie from '../js/Zombie';

test('health', () => {
  const zombie = new Zombie('Qwerty', 'Zombie');
  expect(() => {
    expect(zombie.health).toEqual(100);
  });
});

test('level', () => {
  const zombie = new Zombie('Qwerty', 'Zombie');
  expect(() => {
    expect(zombie.level).toEqual(1);
  });
});

test('attack', () => {
  const zombie = new Zombie('Qwerty', 'Zombie');
  expect(() => {
    expect(zombie.attack).toEqual(40);
  });
});

test('defence', () => {
  const zombie = new Zombie('Qwerty', 'Zombie');
  expect(() => {
    expect(zombie.defence).toEqual(10);
  });
});
