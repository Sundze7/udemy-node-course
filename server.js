const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./4_natours/app");

//console.log(process.env);

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
