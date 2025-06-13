// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createDummyOrder, verifyDummyPayment } = require('../controllers/paymentController');

// Dummy order creation
router.post('/create-order', createDummyOrder);

// Dummy payment verification
router.post('/verify', verifyDummyPayment);

router.post('/verify', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    bookingId,
  } = req.body;

  try {
    // Normally, you'd verify Razorpay signature here (skipped for mock)
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.paymentStatus = 'paid';
    booking.paymentId = razorpay_payment_id;
    booking.confirmed = true;

    await booking.save();

    res.status(200).json({ message: 'Payment verified and booking updated successfully' });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
