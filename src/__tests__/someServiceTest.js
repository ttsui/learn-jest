import { printNow } from "../someService";

let mockNow = 3;
jest.mock("../clock", () => ({
  now() {
    return mockNow;
  }
}));

it("mocks own module clock.now", () => {
  printNow();
});
