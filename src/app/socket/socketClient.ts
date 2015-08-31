import {Client} from "../../socketLib/socketLibClient";
import {serviceServer} from "../../server/socket/serviceServerContract";
import * as serviceClient from "./serviceClient";

let client = new Client();
export let echo = client.sendToSocket(serviceServer.echo);
export let getAllFiles = client.sendToSocket(serviceServer.getAllFiles);

// Also provide the following services to the server
client.registerAllFunctionsExportedFromAsResponders(serviceClient);
client.startListening();