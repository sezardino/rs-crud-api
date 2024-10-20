import http, { IncomingMessage, ServerResponse } from 'http'
import { UserController } from './controllers/users'
import { UserService } from './services/user'
import { jsonResponse } from './utils/json-response'

const userService = new UserService()
const userController = new UserController(userService)

const API_PREFIX = '/api'

export const createServer = () => {
  const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
      const method = req.method
      const urlWithApi = req.url

      if (!urlWithApi?.startsWith(API_PREFIX))
        return jsonResponse(res, 404, { error: 'Route not found' })

      const url = urlWithApi.replace(API_PREFIX, '')

      switch (url) {
        case '':
          jsonResponse(res, 200, { message: 'Welcome to the API!' })
          break
        case '/users':
          if (method === 'GET') {
            userController.getAllUsers(req, res)
          } else if (method === 'POST') {
            userController.createUser(req, res)
          } else {
            jsonResponse(res, 405, { message: 'Method Not Allowed' })
          }
          break
        default:
          jsonResponse(res, 404, { error: 'Route not found' })
          break
      }
    }
  )

  return server
}
