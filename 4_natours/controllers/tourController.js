const Tour = require("./../models/tourModel");

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

  //multiply by 1 to covert id type to a number
  const id = req.params.id * 1;

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
};

exports.createTour = async (req, res) => {
  try {
    //method 1: creating a model and calling the save() on d new doc
    //const newTour = new Tour({})
    //newTour.save()

    //method 2: calling save() directly on d model
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data sent",
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
