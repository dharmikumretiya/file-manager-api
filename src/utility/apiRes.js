
// standered api error response 
class apiErrorResponse {
  constructor(status, message, errors = [], meta = {}) {
    this.success = false;
    this.status = status;
    this.message = message;
    this.errors = errors;
    this.meta = meta;
  }
}

// standered api error response 
class apiSuccessResponse {
  constructor(status, message, data = {}, meta = {}) {
    this.success = "true";
    this.status = status;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }
}

export {apiErrorResponse,apiSuccessResponse}
