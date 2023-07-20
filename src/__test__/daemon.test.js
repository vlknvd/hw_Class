import Daemon from '../js/Daemon';

test('health', () => {
  const daemon = new Daemon('Qwerty', 'Daemon');
  expect(() => {
    expect(daemon.health).toEqual(100);
  });
});

test('level', () => {
  const daemon = new Daemon('Qwerty', 'Daemon');
  expect(() => {
    expect(daemon.level).toEqual(1);
  });
});

test('attack', () => {
  const daemon = new Daemon('Qwerty', 'Daemon');
  expect(() => {
    expect(daemon.attack).toEqual(10);
  });
});

test('defence', () => {
  const daemon = new Daemon('Qwerty', 'Daemon');
  expect(() => {
    expect(daemon.defence).toEqual(40);
  });
});
