/**
 * This class represents an element or bar of the array
 * @property height - height of the element
 * @property state - state of the element i.e. [UNSORTED, ACTIVE, UNSWAPPED, SWAPPED, SORTED]
 */

import colors from "helper/colors";
import states from "helper/states";

export default class Bar {
  constructor(height, state = states.UNSORTED) {
    this.height = height;
    this.state = state;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }

  get color() {
    return colors[this.state];
  }
}
