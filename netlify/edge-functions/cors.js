export default async (request, { next }) => {
  const response = await next()
  const origin = request.headers.get('Origin')

  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }

  return response
}

export const config = { name: 'Set WIX headers', path: ['/college/*'] }
