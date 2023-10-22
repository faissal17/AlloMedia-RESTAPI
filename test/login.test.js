const authController = require("../src/controllers/authController");
const User = require("../src/models/User");

jest.mock("../src/models/User");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      email: "",
      password: "faissalfaissal",
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "email or password are not allowed to be empty",
  });
});

it("should return status 400 if password is empty ", async () => {
  const req = {
    body: {
      email: "faisal@gmail.com",
      password: "",
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "email or password are not allowed to be empty",
  });
});
