import { MissingParamError } from '../errors'
import { badRequest } from '../helpers/http/status'
import Controller from '../interfaces/controller'
import { HttpRequest, HttpResponse } from '../types/http'

export default class SignUpController implements Controller {
  handle (httpResquest: HttpRequest): HttpResponse {
    if (!httpResquest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpResquest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
