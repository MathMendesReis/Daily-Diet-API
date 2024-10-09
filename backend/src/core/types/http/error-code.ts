interface ErrorInfo {
  statusCode: number;
  message: string;
}
export const ErrorCodeMap = new Map<number, ErrorInfo>([
  [400, { statusCode: 400, message: 'BAD_REQUEST' }],
  [401, { statusCode: 401, message: 'UNAUTHORIZED' }],
  [403, { statusCode: 403, message: 'FORBIDDEN' }],
  [404, { statusCode: 404, message: 'NOT_FOUND' }],
  [409, { statusCode: 409, message: 'CONFLICT' }],
  [422, { statusCode: 422, message: 'VALIDATION_ERROR' }],
  [500, { statusCode: 500, message: 'SERVER_ERROR' }],
  [502, { statusCode: 502, message: 'DATABASE_ERROR' }],
  [504, { statusCode: 504, message: 'TIMEOUT' }],
]);
