const authController = require("../src/controllers/authController");
const User = require("../src/models/User");
const bcryptjs = require("bcryptjs");

jest.mock("../src/models/User");
jest.mock("bcryptjs");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      name: "",
      email: "faissalaoukacha@gmail.com",
      password: "faissalfaissal",
      role: "client",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});
it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      name: "faissal",
      email: "",
      password: "faissalfaissal",
      role: "client",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});
it("should return status 400 if password is empty", async () => {
  const req = {
    body: {
      name: "faissal",
      email: "faissalaoukacha",
      password: "",
      role: "client",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});
