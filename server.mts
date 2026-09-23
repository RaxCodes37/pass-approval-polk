import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("join-class", (teacherClass) => {
      socket.join(teacherClass);
    });

    socket.on(
      "pass-request",
      ({ studentName, classDepartedFrom, destination, reason }) => {
        socket.to(classDepartedFrom).emit("pass-request", {
          classDepartedFrom,
          studentName,
          destination,
          reason,
        });
      },
    );

    socket.on(
      "new-active-request",
      ({
        studentName,
        classDepartedFrom,
        destination,
        reason,
        timeOfDeparture,
      }) => {
        console.log(`${studentName}, ${classDepartedFrom}, ${destination}, ${reason}, ${timeOfDeparture}`)
        socket
          .to(classDepartedFrom)
          .emit("new-active-request", {
            studentName,
            classDepartedFrom,
            destination,
            reason,
            timeOfDeparture,
          });
      },
    );
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
