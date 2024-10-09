import { ServerResponse } from "../utils/server-response";

export class Created<T = any> extends ServerResponse{
  
  constructor(data:T) {
    super(
      201,
      data
    );
  }
}