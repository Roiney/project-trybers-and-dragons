import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  protected static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.orcInstances;
  }
}

export default Orc;