// CommonJs
const fastify = require('fastify')({
  logger: true
})
const cars = ['bmw','GMC','toyota']
const resturant = ['Mac','KFC','Shawrmer']
const team = ['alhlial','alnaser','aleathad']


fastify.get('/', async (request, reply) => {
  return { hello: 'choose cars or team or restruant to search -_- !!' }
})

fastify.get('/cars', async (request, reply) => {
  return cars;
})
fastify.get('/resturant', async (request, reply) => {
  return resturant;
})
fastify.get('/team', async (request, reply) => {
  return team;
})
fastify.post('/cars', async (request, reply) => {
  cars.push(request.body);
  return cars;
})
const host = process.env.NODE.env === 'production' ? '0.0.0.0': '127.1';
const port= process.env.$PORT || process.env.PORT ||3000;


/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: port , host:host })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()