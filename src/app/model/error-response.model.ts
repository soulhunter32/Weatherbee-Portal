export class ErrorResponse {

    code: number;
    message: string;

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}