import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  protected static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.halflingInstances;
  }
}

export default Halfling;