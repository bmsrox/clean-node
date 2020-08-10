import { HttpRequest, HttpResponse } from '../types/http'

export default interface Controller {
  handle: (httpResquest: HttpRequest) => HttpResponse
}
