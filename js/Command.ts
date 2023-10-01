interface handlerType {
  (args: string[]): string
}

interface CommandType {
  name: string
  handler: handlerType
  description: string
  usage?: string
  options?: { option: string, description: string }[]
}

export class Command {
  name: string
  handler: handlerType
  description: string
  usage?: string
  options?: { option: string, description: string }[]

  constructor(
    {
      name,
      handler,
      description = '',
      usage = '',
      options = []
    }: CommandType) {
    this.name = name
    this.handler = handler
    this.description = description
    this.usage = usage
    this.options = options // [{ option: '-o', description: 'Example option' }]
  }
}
