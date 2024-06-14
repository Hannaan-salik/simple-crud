const express = require("express")
const router = express.Router();
const {getproducts, updateproducts, createproducts, deleteproduct, getproduct} = require("../controllers/product")

router.get("/",getproducts);
router.post("/",createproducts);
router.put("/:id",updateproducts);
router.delete("/:id",deleteproduct);
router.post("/:id",getproduct);

module.exports = router;