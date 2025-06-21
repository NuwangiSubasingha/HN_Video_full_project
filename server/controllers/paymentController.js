// // controllers/paymentController.js
// const Booking = require('../models/bookingModel'); // Adjust path as needed

// // Dummy order creation
// exports.createDummyOrder = (req, res) => {
//   const { amount } = req.body;

//   const dummyOrder = {
//     id: 'order_dummy_' + Math.floor(Math.random() * 10000),
//     amount: amount * 100, // in paisa
//     currency: 'INR',
//     status: 'created',
//   };

//   return res.status(200).json(dummyOrder);
// };

// // Dummy payment verification
// exports.verifyDummyPayment = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

//   try {
//     // Simulate success
//     await Booking.findByIdAndUpdate(bookingId, {
//       paymentStatus: 'paid',
//       paymentId: razorpay_payment_id,
//     });

//     res.status(200).json({ success: true, message: 'Payment verified (dummy).' });
//   } catch (err) {
//     console.error('Verification error:', err);
//     res.status(500).json({ success: false, message: 'Payment verification failed.' });
//   }
// };

const Booking = require('../models/bookingModel'); // Adjust path as needed
const nodemailer = require('nodemailer'); // ✅ added for email

// Dummy order creation
exports.createDummyOrder = (req, res) => {
  const { amount } = req.body;

  const dummyOrder = {
    id: 'order_dummy_' + Math.floor(Math.random() * 10000),
    amount: amount * 100, // in paisa
    currency: 'INR',
    status: 'created',
  };

  return res.status(200).json(dummyOrder);
};

// Dummy payment verification
exports.verifyDummyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

  try {
    // Simulate success
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        paymentStatus: 'paid',
        paymentId: razorpay_payment_id,
      },
      { new: true }
    ).populate("packageId"); // ✅ populate used for email content

    // ✅ If booking not found
    if (!booking) {
      console.error("Booking not found for ID:", bookingId);
      return res.status(404).json({ success: false, message: "Booking not found." });
    }

    // ✅ Send email to admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const html = `
      <h3>📩 Payment Successful</h3>
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Function Date:</strong> ${new Date(booking.functionDate).toLocaleDateString()}</p>
      <p><strong>Package:</strong> ${booking.packageId?.name || 'N/A'}</p>
      <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
      <p style="color:green;"><strong>Status: PAID</strong></p>
    `;

    await transporter.sendMail({
      from: `"HN VIDEO" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, // send to admin
      subject: 'HN VIDEO - Payment Successful',
      html,
    });

    res.status(200).json({ success: true, message: 'Payment verified (dummy).' });
  } catch (err) {
    console.error('Verification error:', err);
    res.status(500).json({ success: false, message: 'Payment verification failed.' });
  }
};
