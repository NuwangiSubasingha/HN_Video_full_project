const Booking = require("../models/bookingModel");

const getBookings = async (req, res, next) => {
    try {
       const bookings = await Booking.find().populate("pkgID");
        if(!bookings){
            res.status(400);
            throw new Error("cannot find bookings");
        }

        return res.status(200).json(bookings);
    } catch (error) {
       next(error); 
    }
};

// create booking
const createBooking = async(req, res, next) => {
    try {
            const booking = await Booking.create(req.body);
            if(!booking){
                res.status(400);
                throw new Error("cannot create booking");
            }
            return res.status(201).json(booking);
        } catch (error){
        next(error);
}
};

// update booking
const updateBooking = async(req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },  {
            new: true
        });

        if(!updatedBooking){
            res.status(400);
            throw new Error("cannot create booking");
        }
        const bookings = await Booking.find();
        return res.status(200).json(bookings);
    } catch (error) {
        next(error);
        
    }
};

// delete booking
const deleteBooking = async(req, res, next) => {
    try {
        const package = await Booking.findByIdAndDelete(req.params.id);
        if(!package) {
            res.status(400);
            throw new Error("cannot delete room");
        }
        return res.status(200).json({ id: req.params.id});
    } catch(error){
        next(error)
    }
};


//get one booking
const getBooking = async(req, res, next) => {

    try {
        const booking = await Booking.findById(req.params.id).populate("pkgID");
        if(!booking){
            res.status(400);
            throw new Error("booking not found");
        }
        return res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBookings,
    getBooking ,
    createBooking,
    updateBooking,
    deleteBooking,
    
};