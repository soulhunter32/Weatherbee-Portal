import { User } from "./user.model";
import { Location } from "./location.model";

export class Board {

    id: number;
    owner: User;
    locations: Location[];

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}