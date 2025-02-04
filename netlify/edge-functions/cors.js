export default async (request, { next }) => {
  const response = await next()
  const origin = request.headers.get('Origin')

  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }

  console.log(111, origin)

  return response
}

export const config = { name: 'Set CORS headers', path: ['/college/*'] }
