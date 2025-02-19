type StatusCode = 400 | 401 | 404 | 500;

class APIError extends Error {
  public code: 400 | 401 | 404 | 500;

  constructor(message: string, code: StatusCode) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default APIError;
