import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from cloupard and bogdanna.com! This is a simple HonoJS app powered by Bun.js Test autodeploy 2')
})

export default app
