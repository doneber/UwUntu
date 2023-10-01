export const $ = (selector: string, context: Document = document): HTMLElement =>
  context.querySelector(selector)!
