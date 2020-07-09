import colors from "./colors";
import states from "./states";

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
