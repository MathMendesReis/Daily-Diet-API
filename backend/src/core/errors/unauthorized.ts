import { ErrorCodeMap } from "../types/http/error-code";
import { ServerResponse } from "../utils/server-response";

export class Unauthorized
extends ServerResponse{
  
  constructor() {
    super(
      ErrorCodeMap.get(401).statusCode,
      ErrorCodeMap.get(401).message
    );
  }
}