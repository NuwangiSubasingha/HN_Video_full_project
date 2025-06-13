import { useState } from 'react';
import { useParams } from 'react-router-dom';

const icons = {
  visa: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40" width="40" height="25" fill="#1a1f71">
      <rect width="64" height="40" rx="6" ry="6" fill="#1a1f71" />
      <text
        x="32"
        y="27"
        fontSize="20"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
        textAnchor="middle"
      >
        VISA
      </text>
    </svg>
  ),
  mastercard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40" width="40" height="25">
      <circle cx="24" cy="20" r="16" fill="#eb001b" />
      <circle cx="40" cy="20" r="16" fill="#f79e1b" />
    </svg>
  ),
  paypal: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40" width="40" height="25" fill="#003087">
      <rect width="64" height="40" rx="6" ry="6" fill="#003087" />
      <text
        x="32"
        y="27"
        fontSize="18"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
        textAnchor="middle"
      >
        PayPal
      </text>
    </svg>
  ),
  alipay: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40" width="40" height="25" fill="#0090ff">
      <rect width="64" height="40" rx="6" ry="6" fill="#0090ff" />
      <text
        x="32"
        y="27"
        fontSize="18"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
        textAnchor="middle"
      >
        Alipay
      </text>
    </svg>
  ),
  koko: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40" width="40" height="25" fill="#5b2e97">
      <rect width="64" height="40" rx="6" ry="6" fill="#5b2e97" />
      <text
        x="32"
        y="27"
        fontSize="18"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial"
        textAnchor="middle"
      >
        Koko
      </text>
    </svg>
  ),
};

const dummyCards = {
  visa: {
    cardNumber: '4111111111111111',
    expiry: '12/26',
    cvv: '123',
    name: 'Nuwangi Subasinghe',
  },
  mastercard: {
    cardNumber: '5500000000000004',
    expiry: '11/25',
    cvv: '456',
    name: 'Nuwangi Subasinghe',
  },
  paypal: {
    email: 'user@paypal.com',
  },
  alipay: {
    userId: 'alipayuser123',
  },
  koko: {
    account: 'koko_account_456',
  },
};

const methodNames = {
  visa: 'Visa',
  mastercard: 'MasterCard',
  paypal: 'PayPal',
  alipay: 'Alipay',
  koko: 'Koko',
};

function PaymentPage() {
  const { bookingId } = useParams(); 
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [cardDetails, setCardDetails] = useState(dummyCards.visa);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const amount = 50000.0;


  const handleChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);
    setCardDetails(dummyCards[method] || {});
    setMessage(null);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: 'dummy_order_id',
          razorpay_payment_id: 'dummy_payment_id_' + Date.now(),
          razorpay_signature: 'dummy_signature',
          bookingId, // <-- Use the variable directly
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '✅ Payment Verified & Booking Updated!' });
      } else {
        setMessage({ type: 'error', text: '❌ Payment Failed: ' + data.message });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: '❌ Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8 font-sans">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Payment</h2>

        <div className="mb-6">
          <p className="font-semibold mb-3 text-gray-900">Select Payment Method:</p>
          <div className="flex gap-6 flex-wrap">
            {Object.keys(icons).map((method) => (
              <label
                key={method}
                className={`flex flex-col items-center gap-1 cursor-pointer ${
                  paymentMethod === method ? 'ring-2 ring-green-500 rounded-md p-2' : ''
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={handleChange}
                  className="hidden"
                />
                <div>{icons[method]}</div>
                <span className="text-sm text-gray-700">{methodNames[method]}</span>
              </label>
            ))}
          </div>
        </div>

        {(paymentMethod === 'visa' || paymentMethod === 'mastercard') && (
          <div className="space-y-4 mb-6 text-gray-900">
            <div>
              <label className="block font-medium mb-1" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                maxLength={16}
                autoComplete="off"
                value={cardDetails.cardNumber || ''}
                onChange={handleInput}
                placeholder="Enter card number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block font-medium mb-1" htmlFor="expiry">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  maxLength={5}
                  autoComplete="off"
                  value={cardDetails.expiry || ''}
                  onChange={handleInput}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block font-medium mb-1" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  maxLength={3}
                  autoComplete="off"
                  value={cardDetails.cvv || ''}
                  onChange={handleInput}
                  placeholder="***"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="name">
                Cardholder Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={cardDetails.name || ''}
                onChange={handleInput}
                placeholder="Full name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="mb-6 text-gray-900">
            <label className="block font-medium mb-1" htmlFor="email">
              PayPal Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={cardDetails.email || ''}
              onChange={handleInput}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {paymentMethod === 'alipay' && (
          <div className="mb-6 text-gray-900">
            <label className="block font-medium mb-1" htmlFor="userId">
              Alipay User ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              autoComplete="off"
              value={cardDetails.userId || ''}
              onChange={handleInput}
              placeholder="Alipay user ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {paymentMethod === 'koko' && (
          <div className="mb-6 text-gray-900">
            <label className="block font-medium mb-1" htmlFor="account">
              Koko Account
            </label>
            <input
              type="text"
              id="account"
              name="account"
              autoComplete="off"
              value={cardDetails.account || ''}
              onChange={handleInput}
              placeholder="Koko account"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        <p className="mb-6 font-semibold text-gray-900">
          Amount to Pay (Rs): <span className="text-green-700">{amount.toFixed(2)}</span>
        </p>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-3 rounded-md text-white font-semibold ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } transition-colors duration-200`}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>

        {message && (
          <p
            className={`mt-4 font-semibold ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
