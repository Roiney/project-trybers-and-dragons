import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  protected static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.dwarfInstances;
  }
}

export default Dwarf;