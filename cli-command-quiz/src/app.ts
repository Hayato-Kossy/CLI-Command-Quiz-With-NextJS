import { Controller } from "./controller/Controller";
import { CLI } from "./model/CLI";

let cli:CLI = new CLI();

Controller.activateCLI(cli);
console.log("hello")
// const app = () => {
//     let cli:CLI = new CLI();

//     Controller.activateCLI(cli);
// }

// export default app
