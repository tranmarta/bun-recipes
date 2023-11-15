const server = Bun.serve({
  port: Bun.env.PORT || 3000,
  fetch(req) {
    return new Response("Nice bun!");
  },
});

console.log(`Server is running on port ${server.port}`);