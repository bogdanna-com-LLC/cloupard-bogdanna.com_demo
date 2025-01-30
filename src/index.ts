import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from cloupard and bogdanna.com! fjfjjgkytkk This is a simple HonoJS app powered by Bun.js Test autodeploy 3')
})

export default app
