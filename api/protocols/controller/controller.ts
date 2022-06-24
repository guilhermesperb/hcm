import { HttpResponse } from '../http/http'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}