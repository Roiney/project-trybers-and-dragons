import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  protected static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfInstances += 1; 
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.elfInstances;
  }
}

export default Elf;