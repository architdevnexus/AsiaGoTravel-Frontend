import React from "react";

 const CancellationRefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Cancellation & Refund Policy</h1>
        <p className="text-gray-600 mb-6">
          We understand that plans may change. Our cancellation and refund policy is designed to be simple and transparent.
        </p>

        {/* 1. Cancellation by Customer */}
        <h2 className="text-xl font-semibold mt-6">1. Cancellation by Customer</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>30 days or more before travel: <strong>80% refund</strong></li>
          <li>15–29 days before travel: <strong>50% refund</strong></li>
          <li>7–14 days before travel: <strong>25% refund</strong></li>
          <li>Less than 7 days: <strong>No refund</strong></li>
        </ul>
        <p className="text-gray-500 mt-1 text-sm">(You may change these percentages if needed.)</p>

        {/* 2. Non-Refundable Situations */}
        <h2 className="text-xl font-semibold mt-6">2. Non-Refundable Situations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Payments made for flights, trains, or special activities that are marked as non-refundable.</li>
          <li>No-show or late arrival.</li>
          <li>Incorrect travel documents (passport, ID, visa issues).</li>
          <li>Bookings during peak seasons or events with strict partner policies.</li>
        </ul>

        {/* 3. Refund Timeline */}
        <h2 className="text-xl font-semibold mt-6">3. Refund Timeline</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Refunds are processed within <strong>7–14 working days</strong>.</li>
          <li>Refund amount will be credited to the original payment method.</li>
        </ul>

        {/* 4. Cancellation by Company */}
        <h2 className="text-xl font-semibold mt-6">4. Cancellation by Company</h2>
        <p className="mt-2 text-gray-700">
          If we cancel a trip due to unavoidable reasons such as:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Weather conditions</li>
          <li>Natural disasters</li>
          <li>Low booking count</li>
          <li>Government restrictions</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Customers will receive:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li><strong>Full refund</strong> OR</li>
          <li>Option to <strong>reschedule the trip</strong></li>
        </ul>

        {/* 5. Amendments */}
        <h2 className="text-xl font-semibold mt-6">5. Amendments</h2>
        <p className="mt-2 text-gray-700">
          Any changes to travel dates or itinerary may incur additional charges depending on partner rules and availability.
        </p>
      </div>
    </div>
  );
};
 export default CancellationRefundPolicyPage