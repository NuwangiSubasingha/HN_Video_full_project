const { Router } = require("express");
const { createPackage, getPackages,getPackage, updatePackage, deletePackage } = require ("../controllers/packageController");

const router = Router();

//get all packages
router.get("/", getPackages);

//create package
router.post("/", createPackage);

//  get one package
router.get("/:id", getPackage);

// update package
router.put("/:id", updatePackage);

// delete package
router.delete("/:id", deletePackage);

module.exports = router;