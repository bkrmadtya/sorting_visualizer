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
