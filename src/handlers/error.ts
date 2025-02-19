import APIError from "@/utils/error";
import type { Request, Response, NextFunction } from "express";

function errorHandler (error: APIError, req: Request, res: Response, next: NextFunction) {

  console.log ("api-error", error)

  const code = error.code || 500;
  const message = error.message || "Something went wrong";

  res.status(code).json({
    success: false,
    error:{
      code,
      message
    }
  });

}

export default errorHandler;