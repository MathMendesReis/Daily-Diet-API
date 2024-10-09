import type { CookieOptions } from "./cookie-options"

export interface HttpResponse<T = any>{
  statusCode: number
  data: T
  cookies?: CookieOptions[]
}
export interface HttpRequest {
  headers?: any
  params?: any
  body?: any
  session?: any
  query?:any
}