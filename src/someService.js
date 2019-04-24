import { now } from "./clock";

const valueOfNow = now();

export function printNow() {
  console.log("now = ", valueOfNow);
}