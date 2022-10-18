import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private _energy: EnergyType;
  public static rangerInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Ranger.rangerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Ranger.rangerInstances;
  }
}

export default Ranger;