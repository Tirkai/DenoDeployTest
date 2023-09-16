import fastify from "npm:fastify@latest";

const app = fastify({ logger: true });

app.get("/", (request, response) => {
  return {
    message: "hello, guys",
  };
});

app.listen({ port: 8080}, () => console.log("Server started"))