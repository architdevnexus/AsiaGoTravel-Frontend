import React from "react";

const CancellationRefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-semibold mb-2">
          Cancellation & Refund Policy
        </h1>
        <p className="text-gray-600 mb-6">
          <strong>Company Name:</strong> Asiago Travels <br />
          <strong>Registered Office:</strong> Jaipur, Rajasthan, India
        </p>

        {/* 1. Written Cancellation */}
        <h2 className="text-xl font-semibold mt-6">1. Written Cancellation</h2>
        <p className="mt-2 text-gray-700">
      All cancellation requests must be submitted in writing via email or official communication to Asiago Travels. The effective date of cancellation shall be the date on which such request is received by the Company.
        </p>

        {/* 2. Cancellation Charges */}
        <h2 className="text-xl font-semibold mt-6">2. Cancellation Charges</h2>
        <p className="mt-2 text-gray-700">
          Cancellation charges shall apply as per the Company’s prevailing
          cancellation schedule and/or as per the terms and conditions of
          airlines, hotels, transport providers, and other third-party suppliers
          involved in the booking.
        </p>

        {/* Cancellation Slab */}
        <h3 className="text-lg font-semibold mt-4">
          Cancellation Charges (Domestic Tour Packages Only)
        </h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            More than 30 days prior to departure:{" "}
            <strong>Booking service / administrative charges (if any)</strong>
          </li>
          <li>
            30–21 days prior to departure:{" "}
            <strong>25% of total tour cost</strong>
          </li>
          <li>
            20–14 days prior to departure:{" "}
            <strong>50% of total tour cost</strong>
          </li>
          <li>
            13–7 days prior to departure:{" "}
            <strong>75% of total tour cost</strong>
          </li>
          <li>
            Less than 7 days prior to departure / No-show:{" "}
            <strong>100% of total tour cost (No refund)</strong>
          </li>
        </ul>

        {/* 3. Non-Refundable Services */}
        <h2 className="text-xl font-semibold mt-6">
          3. Non-Refundable Services
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Airfare, visa fees, and travel insurance</li>
          <li>Special promotional or peak-season bookings</li>
          <li>Third-party services governed by supplier policies</li>
          <li>
            Any service marked as non-refundable or partially refundable by the
            supplier
          </li>
        </ul>

        {/* 4. No-Show / Unused Services */}
        <h2 className="text-xl font-semibold mt-6">
          4. No-Show / Unused Services
        </h2>
        <p className="mt-2 text-gray-700">
          No refund shall be payable in case of no-show, early departure, or for
          any unused or partially used services.
        </p>

        {/* 5. Force Majeure */}
        <h2 className="text-xl font-semibold mt-6">5. Force Majeure</h2>
        <p className="mt-2 text-gray-700">
          Asiago Travels shall not be liable for any loss, delay, cancellation,
          or change arising due to events beyond its reasonable control,
          including but not limited to natural calamities, pandemics, political
          disturbances, airline disruptions, strikes, war, or governmental
          restrictions. Refunds, if any, shall be strictly subject to actual
          recoveries from vehicle suppliers, hotels, airlines, cruises, and
          other service providers.
        </p>

        {/* 6. Refund Processing */}
        <h2 className="text-xl font-semibold mt-6">6. Refund Processing</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            Approved refunds will be processed within{" "}
            <strong>7–14 working days</strong> from the date the refundable
            amount is received from the supplier.
          </li>
          <li>
            Refunds will be credited through the{" "}
            <strong>original mode of payment only</strong>.
          </li>
        </ul>

        {/* 7. Company-Initiated Cancellation */}
        <h2 className="text-xl font-semibold mt-6">
          7. Company-Initiated Cancellation
        </h2>
        <p className="mt-2 text-gray-700">
          The Company reserves the right to cancel any tour or service due to
          operational reasons, insufficient participation, or circumstances
          beyond its control. In such cases, the Company’s liability shall be
          limited to the refund of the amount actually recovered from suppliers.
        </p>

        {/* 8. Governing Law */}
        <h2 className="text-xl font-semibold mt-6">
          8. Governing Law & Jurisdiction
        </h2>
        <p className="mt-2 text-gray-700">
          This agreement shall be governed by and construed in accordance with
          the laws of India. Any disputes arising out of or in connection with
          these terms shall be subject to the exclusive jurisdiction of the
          courts of Jaipur, Rajasthan, India.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicyPage;
