import React from "react";

 const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-6">
          By using our website and booking our travel packages, you agree to the following Terms & Conditions.
        </p>

        {/* 1. Booking Policy */}
        <h2 className="text-xl font-semibold mt-6">1. Booking Policy</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>All bookings are subject to availability.</li>
          <li>Prices may change based on season, availability, or partner updates.</li>
          <li>Complete and accurate information must be provided at the time of booking.</li>
        </ul>

        {/* 2. Payments */}
        <h2 className="text-xl font-semibold mt-6">2. Payments</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Full or partial advance payment is required to confirm bookings.</li>
          <li>We use secure third-party payment gateways.</li>
          <li>Any additional charges (like hotel taxes, entry fees, or peak charges) must be paid by the customer.</li>
        </ul>

        {/* 3. Travel Documents */}
        <h2 className="text-xl font-semibold mt-6">3. Travel Documents</h2>
        <p className="mt-2 text-gray-700">Customers are responsible for:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Valid ID proof</li>
          <li>Required travel documents (passport, visa, permits)</li>
        </ul>

        {/* 4. Inclusions & Exclusions */}
        <h2 className="text-xl font-semibold mt-6">4. Package Inclusions & Exclusions</h2>
        <p className="mt-2 text-gray-700">
          Inclusions and exclusions will be clearly mentioned on each package page. Any extra personal
          expenses must be paid by the customer.
        </p>

        {/* 5. Cancellations */}
        <h2 className="text-xl font-semibold mt-6">5. Changes & Cancellations</h2>
        <p className="mt-2 text-gray-700">
          Changes to travel dates, hotels, or itinerary are subject to availability and partner policies.
          Cancellation rules are defined in the Cancellation Policy.
        </p>

        {/* 6. Responsibility */}
        <h2 className="text-xl font-semibold mt-6">6. Responsibility & Liability</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Not responsible for delays due to weather, strikes, natural disasters, or government actions.</li>
          <li>We act as an intermediary between customers and travel partners (hotels, airlines, etc.).</li>
          <li>Any disputes with partners will follow their respective policies.</li>
        </ul>

        {/* 7. Website Use */}
        <h2 className="text-xl font-semibold mt-6">7. Use of Website</h2>
        <p className="mt-2 text-gray-700">
          You agree not to misuse the website, steal content, or attempt to harm the website's system.
        </p>

        {/* 8. Governing Law */}
        <h2 className="text-xl font-semibold mt-6">8. Governing Law</h2>
        <p className="mt-2 text-gray-700">
          All disputes are subject to the jurisdiction of Jaipur, Rajasthan.
        </p>
      </div>
    </div>
  );
};
export default TermsConditionsPage