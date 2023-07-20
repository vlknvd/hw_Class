import Character from '../js/Character';
import Bowman from '../js/Bowman';

test('name', () => {
  expect(() => {
    Character('Aergjrgeirigo', 'Bowman');
  }).toThrow();
});
test('type', () => {
  expect(() => {
    Character('Qwerty', 'OOO');
  }).toThrow();
});
test('levelUp', () => {
  const character = new Bowman('Qwerty', 'Bowman');
  const character2 = {
    name: 'Qwerty',
    type: 'Bowman',
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
  };
  character.levelUp();
  expect(character).toEqual(character2);
});
test('healthLevel', () => {
  expect(() => {
    const character = new Bowman('Qwerty', 'Bowman');
    character.health = 0;
    character.levelUp();
  }).toThrow();
});
test('damage', () => {
  const character = new Bowman('Qwerty', 'Bowman');
  const character2 = {
    name: 'Qwerty',
    type: 'Bowman',
    level: 1,
    attack: 25,
    defence: 25,
    health: 75,
  };
  character.damage(100);
  expect(character).toEqual(character2);
});
test('damageHealth', () => {
  const character = new Bowman('Qwerty', 'Bowman');
  character.health = 0;
  expect(character.damage()).toBeUndefined();
});
