export default async (request, { next }) => {
  const response = await next()
  // const origin = request.headers.get('Origin')

  // if (origin) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  // }

  console.log(111, request.path)

  return response
}

export const config = {
  name: 'Set CORS headers',
  path: ['/college', '/college/*']
}
