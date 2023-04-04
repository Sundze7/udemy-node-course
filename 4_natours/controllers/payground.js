// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`tour id is: ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: "fail",
//       message: "missing name or price",
//     });
//   }
//   next();
// };

// exports.getTour = (req, res) => {
//     console.log(req.params);
//multiply by 1 to covert id type to a number
//const id = req.params.id * 1;
// either TEST 1
//   if (id > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
// const tour = tours.find((el) => el.id === id);
// res.status(200).json({
//   status: "success",
//   data: {
//     tour,
//   },
// });
// };
