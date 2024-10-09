// export const ok = (
//   data: any = {},
//   httpCode = 200,
//   cookies?: CookieOptions[],
// ): HttpResponse => ({
//   statusCode: httpCode,
//   data,
//   cookies,
// })

import type { CookieOptions } from "../types/http/cookie-options";
import type { HttpResponse } from "../types/http/http";

export class ServerResponse<T = any> implements HttpResponse<T>{
  statusCode: number;
  data: T;
  cookies?: CookieOptions[];

  constructor(
    statusCode?: number,
    data?: T,
    cookies?: CookieOptions[]
  ){
    this.statusCode = statusCode
    this.data = data
    this.cookies = cookies
  }
}