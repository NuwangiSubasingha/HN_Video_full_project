const { Router } = require("express");

const { createPackage, getPackages,getPackage, updatePackage, deletePackage, getPackagePrice } = require ("../controllers/packageController");

const { auth } = require("../middleware/authMiddleware");

const router = Router();

//get all packages
router.get("/", getPackages);

//create package
router.post("/", auth, createPackage);

//  get one package
router.get("/:id",  getPackage);

// update package
router.put("/:id", auth,  updatePackage);

// delete package
router.delete("/:id", auth, deletePackage);


router.get('/price', getPackagePrice);

module.exports = router;