import { ErrorCodeMap } from "../types/http/error-code";
import { ServerResponse } from "../utils/server-response";

export class NotFoundError extends ServerResponse{
  
  constructor() {
    super(
      ErrorCodeMap.get(404).statusCode,
      ErrorCodeMap.get(404).message
    );
  }
}