import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get('/api/users/currentUser', (req, res) => {
  console.log('hi there')
})

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
