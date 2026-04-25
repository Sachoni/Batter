import { io } from "socket.io-client";

const URL = "http://localhost:5000"; // your backend later

export const socket = io(URL, {
  autoConnect: false, // important for control
});