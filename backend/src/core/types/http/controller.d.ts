import type { HttpRequest } from "./http";

export interface Controller {
  handle: (req: HttpRequest) => Promise<ServerResponse>
}