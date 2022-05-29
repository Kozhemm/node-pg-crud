const express = require("express");
const userRouter = require("./routes/CustomerRoute");

const PORT = 5000;

const app = express();
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
