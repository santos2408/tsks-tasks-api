import express from "express";
import tasksRoutes from "./src/routes/tasks.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", tasksRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running in PORT: ${port}`);
});
