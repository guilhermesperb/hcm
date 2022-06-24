export class ServerError extends Error {
    constructor (stack: string | undefined) {
      super('Internal server error')
      this.name = 'ServerError'
      this.stack = stack
    }
  }

  export class UnauthorizedError extends Error {
    constructor () {
      super('Unauthorized')
      this.name = 'UnauthorizedError'
    }
  }