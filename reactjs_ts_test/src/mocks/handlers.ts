import { rest } from 'msw' // rest & graphql

export const handlers = [
  rest.get('https://jsonplaceholder.typeicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princess Diana',
        },
      ])
    )
  }),
]
