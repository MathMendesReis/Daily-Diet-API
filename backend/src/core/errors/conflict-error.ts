import { ErrorCodeMap } from "../types/http/error-code";
import { ServerResponse } from "../utils/server-response";

export class ConflictError extends ServerResponse{
  
  constructor(message?:string) {
    super(
      ErrorCodeMap.get(409).statusCode,
      message??ErrorCodeMap.get(409).message
    );
  }
}