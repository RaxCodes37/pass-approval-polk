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
      "approve-request",
      ({ studentName, destination, timeOfDeparture, classDepartedFrom, requestStatus }) => {
        socket.to(classDepartedFrom).emit("approve-request", requestStatus);
        socket.to(classDepartedFrom).emit("approved-request-info", {studentName, destination, timeOfDeparture})
      },
    );
    socket.on("deny-request", ({ classDepartedFrom, requestStatus }) => {
      socket.to(classDepartedFrom).emit("deny-request", requestStatus);
    });
    socket.on("end-pass", ({ classDepartedFrom, requestStatus }) => {
      socket.to(classDepartedFrom).emit("end-pass", requestStatus);
    })
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port);
});
