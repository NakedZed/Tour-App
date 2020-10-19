
const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours-simple.json`))

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price){
         return res.status(404).json({
             status: 404
         })
    }
    next()
}


exports.checkID = (req, res, next, val) => {
    const id = Number(req.params.id)
    if(id > tours.length ){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        })
    }
    next();
}
exports.getAllTours = (req, res) => {
    res.json({
        status: 'success',
        result: tours.length,
        tours
    })

}

exports.addNewTour = (req, res) => {
    var newId = tours[tours.length-1].id + 1
    
    
    req.body.id = newId
    const newTour = req.body
    console.log(tours.length)
    console.log(newTour)
    
    tours.push(newTour);
    fs.writeFile(`${__dirname}/data/tours-simple.json`, JSON.stringify(tours), err=>{
        res.json({
            status:'success',
            tours 
        })
    })

}


exports.getTourById =  (req, res) => {
    
    const id = Number(req.params.id)
     newTour = tours.find(el => el.id === id);
  
    res.json({
        status: 'success',
          newTour
    })    
  }

