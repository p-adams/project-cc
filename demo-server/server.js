const Hapi = require("@hapi/hapi");
const Path = require("path");
//const captions = require("./vtt_files/en.vtt");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "assets"),
      },
    },
  });

  await server.register(require("@hapi/inert"));

  server.route({
    method: "GET",
    path: "/vtt_files/en.vtt",
    handler: function (request, h) {
      return h.file("vtt_files/en.vtt");
    },
  });

  server.route({
    method: "GET",
    path: "/videos/waves.mp4",
    handler: function (request, h) {
      return h.file("videos/waves.mp4");
    },
  });

  await server.start();
  // console.log(captions);
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
