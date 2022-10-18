import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private _energy: EnergyType;
  public static warriorInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Warrior.warriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Warrior.warriorInstances;
  }
}

export default Warrior;