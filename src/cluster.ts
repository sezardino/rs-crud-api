import cluster from 'cluster'
import os from 'os'
import { createServer } from './server' // Импортируйте ваш серверный код

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  // Запускаем воркеры
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died`)
  })
} else {
  const port = 4000 + (cluster.worker?.id || 0)
  const server = createServer()

  server.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`)
  })
}
