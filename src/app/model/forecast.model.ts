export class Forecast {

    date: string;
    maxTemp: number;
    minTemp: number;
    weatherDescription: string;
    
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}