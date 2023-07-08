const pigFarm = require("../model/pigModel");


const createPig = async(req, res) =>{
    try {
        const createdPig = await pigFarm.create(req.body)
        res.status(200).json(
            {message: "The pig has been purchased successfully", data: createdPig}
        )
    } catch (error) {
        res.status(400).json(
            {message: error.message}
          )    
    }
}

const getAllPigs = async(req, res) =>{
    try {
        
        const getAllPig = await pigFarm.find()
        res.json({
            message: "The available pigs  are " + getAllPig.length, data:getAllPig})
    } catch (error) {
      res.status(400).json(
        {message: error.message}
      )  
    }
}

const getOnePig = async(req, res)=>{
    const pigId = req.params.id
    const onePig = await pigFarm.findById(pigId)
    res.status(200).json(
        {message: "The purchased pig/animal has been bought", data:onePig}
    )
}

const sellOut = async(req, res) =>{
    try {
        const id = req["params"]["id"]

        const sell = await pigFarm["findByIdAndUpdate"](id, {isSold: true}, {new: true})
        const details = await pigFarm.findById(id).select(["name", "breed"])
        res["status"](200)["json"](
            {message: `Animal/pig with the id of ${id} has been sold out`, "details of the animal are":details}
        )
    } catch (error) {
      res["status"](400)["json"](error["message"])  
    }
}

const deletePig = async(req, res) =>{
    try {
        const pigId = req.params.id
        const deletedPig = await pigFarm.findByIdAndDelete(pigId)
        res.status(200).json({message: "The pig has been sold out successfully", data: deletedPig})
    } catch (error) {
        res.status(400).json(error.message)
    }
}



module.exports = {
    createPig,
    getAllPigs,
    getOnePig,
    deletePig,
    sellOut
    
   
}

