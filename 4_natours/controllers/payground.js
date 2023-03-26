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

// //BUILD QUERY
// //1.a. FILTERING
// const queryObj = { ...req.query };
// const excludedFields = ["page", "sort", "limit", "fields"];
// excludedFields.forEach((el) => delete queryObj[el]);

// //1.b. ADVANCED FILTERING
// let queryStr = JSON.stringify(queryObj);
// queryStr = queryStr.replace(/(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
// console.log(JSON.parse(queryStr));

// let query = Tour.find(JSON.parse(queryStr));

//2. SORTING
// if (req.query.sort) {
//   const sortBy = req.query.sort.split(",").join(" ");
//   console.log(sortBy);
//   query = query.sort(sortBy);
// } else {
//   query = query.sort("-createdAt");
// }

//3. FIELD LIMITING
// if (req.query.fields) {
//   const fields = req.query.fields.split(",").join(" ");
//   query = query.select("name difficulty price");
//   // outputs only specified fields
// } else {
//   query = query.select("-__v");
//   // the minus sign means to exclude this field in the output
// }

//4. PAGINATION
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 100;
// const skip = (page - 1) * limit;

// //page=3&limit=10, 1-10: page 1, 11-20: page 2, 21-30: page 3
// query = query.skip(skip).limit(limit);
// // num of entry to skip b4 starting d query of limited num

// if (req.query.page) {
//   const newTours = await Tour.countDocuments();
//   if (skip >= newTours) throw new ErrorEvent("this page does not exist");
// }
