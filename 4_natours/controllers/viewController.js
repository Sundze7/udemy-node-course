const Tour = require("../models/tourModel")
const catchAsync = require('../utils/catchAsync')

exports.getOverview = catchAsync(async (req, res, next) => {
    //Get tour data from the collection
    const tours = await Tour.find()

    //Build template

    //Render that template using tour data from above

    res.status(200).render('overview', {
      title: 'All Tours',
      tours
    })
  })

exports.getTour = (req, res) => {
    res.status(200).render('tour', {
      title: 'The Forest Hicker Tour'
    })
  }