import { Forecast } from "./forecast.model";

export class Location {

    id: number;
    city: string;
    country: string;
    region: string;
    forecast: Forecast[];
    
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}