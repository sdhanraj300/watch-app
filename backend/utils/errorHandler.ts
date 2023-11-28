export const errorHandler = (statusCode: number, message: string) => {
  const error: any = new Error(message);
  error.statusCode = statusCode;
  return error;
};
