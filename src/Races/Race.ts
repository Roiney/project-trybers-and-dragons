abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

export default Race;