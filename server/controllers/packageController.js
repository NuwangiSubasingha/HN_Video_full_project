const Package = require("../models/packageModel")

const getPackages= async (req, res) => {
    try {
        const package = await Package.find();

        if (!package) {
            res.status(400);
            throw new Error("package not found");
        }
        return res.status(200).json(package);
    }catch (error){
    next (error);
    }
};

//create package
const createPackage = async (req , res, next) => {
    try{
        //todo validate data from user with joi
        const package = await Package.create(req.body)

        if(!package) {
            res.status(400);
            throw new Error("there was a problem creating")
        }
        const packages = await Package.find();
        return res.status(201).json(packages);
    }catch (error){
        next(error)
    }

};

//get one package
const getPackage = async (req, res, next) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            return res.status(404).json({ message: "Package not found" });
        }
        return res.status(200).json(package);
    } catch (error) {
        next(error);
    }
};

//update package

const updatePackage = async(req, res, next) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );

        if(!updatedPackage){
            res.status(400);
            throw new Error("cannot update package");
        }
        return res.status(200).json(updatedPackage);
        } catch (error) {
        next(error);
    }
};

// delete package
const deletePackage = async(req, res, next) => {

    try { 
        const package =  await Package.findByIdAndDelete(req.params.id);
        if (!package){
            res.status(400);
            throw new Error("package not deleted");
        }
        return res.status(200).json({ id: req.params.id});
    } catch (error){
        next(error);
    }
};

const getPackagePrice = async (req, res) => {
  try {
    const { packageId } = req.query;

    if (!packageId) {
      return res.status(400).json({ message: 'Package ID is required' });
    }

    const pkg = await Package.findById(packageId);

    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.json({ price: pkg.price });
  } catch (error) {
    console.error('Error fetching package price:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    getPackages,
    createPackage,
    getPackage,
    updatePackage,
    deletePackage,
    getPackagePrice
    
};