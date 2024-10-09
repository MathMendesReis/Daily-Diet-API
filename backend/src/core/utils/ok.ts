import { ServerResponse } from "../utils/server-response";

export class Ok<T = any> extends ServerResponse{
  
  constructor(data?:T) {
    super(
      200,
      data ?? 'sucess'
    );
  }
}