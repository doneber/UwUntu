import { Terminal } from "./Terminal.js";

const $ = (selector, context = document) =>
  context.querySelector(selector)

const commands = [
  {
    name: "echo",
    handler: (args) => args.join(" "),
  },
  {
    name: "date",
    handler: () => new Date().toLocaleString(),
  },
  // Agregar más comandos aquí
];

const terminal = new Terminal($(".terminal__input input"), $(".terminal__output"));
terminal.loadCommands(commands);
