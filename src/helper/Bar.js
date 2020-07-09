import colors from "./Colors";
import states from "./states";

export class Bar {
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

  get getColor() {
    return colors[this.state];
  }
}
