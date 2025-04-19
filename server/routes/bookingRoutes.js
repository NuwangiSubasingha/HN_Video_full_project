const { Router } = require("express");
const { 
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
 } = require("../controllers/bookingController");

router = Router();

router.get("/", getBookings);
router.post("/",createBooking);
router.put("/:id", updateBooking);
router.delete("/:id",deleteBooking);
router.get("/:id",getBooking);


module.exports = router ;