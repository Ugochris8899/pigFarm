const express = require("express")
const router = express.Router()

const {createPig, getAllPigs, getOnePig, deletePig, sellOut} = require("../controller/pigController")

router.post("/create", createPig)

router.get("/getAll", getAllPigs)

router.get("/getOne/:id", getOnePig)

// router.patch("/update/:id", updateBlog)

router.delete("/delete/:id", deletePig)

router.post("/sellpig/:id", sellOut)



module.exports = router










