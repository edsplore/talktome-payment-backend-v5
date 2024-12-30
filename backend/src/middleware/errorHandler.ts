import { Request, Response, NextFunction } from 'express';

interface StripeError extends Error {
  type: string;
}

export const errorHandler = (
  err: Error | StripeError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err);

  if ('type' in err && err.type === 'StripeError') {
    res.status(402).json({
      error: {
        message: err.message,
        type: err.type
      }
    });
    return;
  }

  res.status(500).json({
    error: {
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }
  });
};