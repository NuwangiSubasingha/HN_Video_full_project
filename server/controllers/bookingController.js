const Booking = require("../models/bookingModel");
const nodemailer = require("nodemailer");

// const getBookings = async (req, res, next) => {
//     try {
//        const bookings = await Booking.find().populate("pkgID");
//         if(!bookings){
//             res.status(400);
//             throw new Error("cannot find bookings");
//         }

//         return res.status(200).json(bookings);
//     } catch (error) {
//        next(error); 
//     }
// };

const getBookings = async (req, res) => {
  try {
    // Populate 'packageId' field with the referenced Package document
    //const bookings = await Booking.find(req.params.id).populate('packageId');
 const bookings = await Booking.find().populate("packageId");

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// create booking
const createBooking = async(req, res, next) => {
    try {
      console.log("Received data from frontend:", req.body); // Add this
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
        const booking = await Booking.findById(req.params.id).populate("packageId");
        if(!booking){
            res.status(400);
            throw new Error("booking not found");
        }
        return res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// get all booked dates for a specific package
// const getBookedDates = async (req, res, next) => {
//   try {
//     const { packageId } = req.params;
//     const bookings = await Booking.find({ packageId });

//     const bookedDates = bookings.map(b =>
//       new Date(b.functionDate).toISOString().split("T")[0]
//     );

//     return res.status(200).json(bookedDates);
//   } catch (error) {
//     next(error);
//   }
// };


// get all booked dates regardless of package
const getBookedDates = async (req, res, next) => {
  try {
    const bookings = await Booking.find();

    const bookedDates = bookings.map(b =>
      new Date(b.functionDate).toISOString().split("T")[0]
    );

    return res.status(200).json(bookedDates);
  } catch (error) {
    next(error);
  }
};



const confirmBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("packageId");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

     booking.confirmed = true; // Optional: status update
    await booking.save();

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const payLink = `http://localhost:3001/payment/${booking._id}`;

    const html = `
      <h3>Hi ${booking.name},</h3>
      <p>Your booking has been <strong>confirmed</strong>.</p>
      <p>Please complete the payment by clicking the link below:</p>
      <a href="${payLink}" style="
        background-color:#28a745;
        padding:10px 20px;
        color:white;
        text-decoration:none;
        border-radius:5px;
      ">Pay Now</a>
    `;

    await transporter.sendMail({
      from: `"HN VIDEO" <${process.env.MAIL_USER}>`,
      to: booking.email,
      subject: "Booking Confirmed - Please Complete Payment",
      html,
    });

    return res.status(200).json(booking); // return updated booking
  } catch (error) {
    console.error("Email send error:", error.message);
    next(error);
  }
};



module.exports = {
    getBookings,
    getBooking ,
    createBooking,
    updateBooking,
    deleteBooking,
    getBookedDates,
    confirmBooking,
    
};