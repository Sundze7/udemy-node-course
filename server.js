const app = require("./4_natours/app");

console.log(app.get("env"));

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
