import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private _energy: EnergyType;
  public static mageInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Mage.mageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Mage.mageInstances;
  }
}

export default Mage;