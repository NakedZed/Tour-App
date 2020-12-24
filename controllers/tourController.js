const Tour = require('./../models/tourModel')


exports.getAllTours = async (req, res) => {

    console.log(req.query)

    try{    //Build the QUERY
            //Filtering
            const queryObj = {...req.query}
            execludedFields = ['page', 'sort', 'limit', 'fields'] //when added in the url in the endpoint they need to be execluded
            execludedFields.forEach(el => delete queryObj[el]) //we will delete the key and value if its one of the execluded array
            
            //Advanced Filtering
            // const queryStr = JSON.stringify(queryObj)
            
            // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
          
            // console.log(JSON.parse(queryStr))

            let query =  Tour.find(queryObj)

            // Sorting the results
            if(req.query.sort){
                let sortBy = req.query.sort.split(',').join(' ') //In case the user wanna sort by more than one VALUE
                query = query.sort(sortBy) //Sorting by the query we want Ex: price
            }else{
                query = query.sort('-createdAt')
            }


            //Execute the QUERY
            const tours = await query


                res.json({
                    status: 'success',
                    numberOfResults : tours.length,
                    result: tours
                
                })

    }catch(err){
                res.status(400).json({
                    status:'fail',
                    message:'invalid data',
                    err: err
                })
            }

}

exports.addNewTour = async (req, res) => {
     
    try{
    newTour = await Tour.create(req.body)

    res.status(200).json({
        status: 'success',
        data: newTour
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data',
            err: err
        })
        
    }
}


exports.getTourById =  async (req, res) => {

    try{
            foundTour = await Tour.findById(req.params.id)
            res.status(200).json({
                status: 'success',
                data: foundTour
                })
            
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data'
        })
    }}

exports.updateTour = async (req, res) => {

    try{
    var updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        res.status(200).json({
            status:"success",
            updatedTour
        })
    }catch(err){
        res.status(400).json({
        status:'fail',
        message:'invalid data'
    })

    }

}
exports.deleteTour = async (req, res) => {
    try{
       var deletedTour = await Tour.findByIdAndDelete(req.params.id)
       res.status(200).json({
        status:"success",
        deletedTour
    })

    }catch{
        res.status(400).json({
            status:'fail',
            message:'invalid data'
    })
}}
