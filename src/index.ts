import { creareServer } from "./server";

const configServer = creareServer();

console.log(`Server corriendo en puerto: ${configServer.port}`);