import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private _energy: EnergyType;
  public static necromancerInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Necromancer.necromancerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.necromancerInstances;
  }
}

export default Necromancer;