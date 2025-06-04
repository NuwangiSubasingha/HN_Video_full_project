const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");

const { 
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
    getBookedDates,
 } = require("../controllers/bookingController");

const router = Router();

router.get("/", auth,  getBookings);
router.post("/",  createBooking);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);
router.get("/:id", getBooking);
router.get("/booked-dates/:packageId", getBookedDates);


module.exports = router ;