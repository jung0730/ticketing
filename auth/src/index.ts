import express from "express";
import 'express-async-errors'
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)
// position: errorHandler 前
app.all('*', async(req, res) => {
  throw new NotFoundError()
})
app.use(errorHandler) // throw new Error時trigger middleware

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
