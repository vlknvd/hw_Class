export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно содержать более 2, но менее 10 символов');
    }
    const typeValue = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Undead',
      'Zombie',
      'Daemon',
    ];
    if (typeValue.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверный тип');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Мертвому персонажу нельзя повысить урон');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health = points * (1 - this.defence / 100);
    }
  }
}
