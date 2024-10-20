import http, { IncomingMessage, ServerResponse } from 'http'
import { jsonResponse } from './utils/json-response'

const PORT = process.env.PORT || 3000

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method
    const url = req.url

    switch (url) {
      case '/':
        jsonResponse(res, 200, { message: 'Welcome to the API!' })
        break
      default:
        jsonResponse(res, 404, { error: 'Route not found' })
        break
    }
  }
)

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
