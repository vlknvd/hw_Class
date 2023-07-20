import Bowman from '../js/Bowman';

test('health', () => {
  const bowman = new Bowman('Qwerty', 'Bowman');
  expect(() => {
    expect(bowman.health).toEqual(100);
  });
});

test('level', () => {
  const bowman = new Bowman('Qwerty', 'Bowman');
  expect(() => {
    expect(bowman.level).toEqual(1);
  });
});

test('attack', () => {
  const bowman = new Bowman('Qwerty', 'Bowman');
  expect(() => {
    expect(bowman.attack).toEqual(25);
  });
});

test('defence', () => {
  const bowman = new Bowman('Qwerty', 'Bowman');
  expect(() => {
    expect(bowman.defence).toEqual(25);
  });
});
