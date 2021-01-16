import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@admcos/nav-app",
  () => System.import("@admcos/nav-app"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@admcos/app1",
  () => System.import("@admcos/app1"),
  isActive.app1,
  { domElement: document.getElementById("app1-container") }
);

registerApplication(
  "@admcos/app2",
  () => System.import("@admcos/app2"),
  isActive.app2,
  { domElement: document.getElementById("app2-container") }
);

start();
