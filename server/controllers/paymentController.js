// controllers/paymentController.js
const Booking = require('../models/bookingModel'); // Adjust path as needed

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
    await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: 'paid',
      paymentId: razorpay_payment_id,
    });

    res.status(200).json({ success: true, message: 'Payment verified (dummy).' });
  } catch (err) {
    console.error('Verification error:', err);
    res.status(500).json({ success: false, message: 'Payment verification failed.' });
  }
};

