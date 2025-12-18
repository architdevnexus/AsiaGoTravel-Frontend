import React from "react";

const PrivacyPolicypage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        {/* HEADER */}
        <h1 className="text-3xl font-semibold mb-2">
          Privacy Policy, Cancellation Policy & Data Protection
        </h1>
        <p className="text-gray-500 mb-6">
          Asiago Travels • Last updated: December 2025
        </p>

        {/* INTRODUCTION */}
        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="mt-2 text-gray-700">
          Asiago Travels ("we", "our", "us") is committed to protecting the privacy,
          personal data, and interests of our customers, partners, and website visitors.
          This policy outlines our Privacy Policy, Cancellation & Refund Policy, and
          compliance with applicable data protection laws including GDPR and the
          Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
        </p>
        <p className="mt-2 text-gray-700">
          By using our services, website, or communicating with us, you agree to the
          policies described herein.
        </p>

        {/* PRIVACY POLICY */}
        <h2 className="text-xl font-semibold mt-6">2. Privacy Policy</h2>

        <h3 className="text-lg font-semibold mt-4">2.1 Information We Collect</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Full name, gender, nationality</li>
          <li>Contact details (email address, phone number, postal address)</li>
          <li>Passport details, visa information, date of birth (where required)</li>
          <li>Payment-related information (processed via secure third-party gateways)</li>
          <li>Travel preferences, booking history, special requests</li>
          <li>Technical data such as IP address, browser type, device information</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">2.2 Purpose of Data Collection</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Booking and managing travel services</li>
          <li>Issuing tickets, vouchers, visas, and travel documents</li>
          <li>Customer support and communication</li>
          <li>Compliance with legal and regulatory requirements</li>
          <li>Marketing and promotional communication (with consent)</li>
          <li>Improving our services and customer experience</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">2.3 Data Sharing & Disclosure</h3>
        <p className="mt-2 text-gray-700">
          We do not sell or rent personal data. Information may be shared only with:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Airlines, hotels, transport providers, visa authorities, travel partners</li>
          <li>Payment gateways and financial institutions</li>
          <li>Government or regulatory authorities when required by law</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">2.4 Data Security</h3>
        <p className="mt-2 text-gray-700">
          We implement reasonable administrative, technical, and physical safeguards
          to protect personal data against unauthorized access, misuse, loss, or disclosure.
        </p>

        {/* GDPR */}
        <h2 className="text-xl font-semibold mt-6">
          3. GDPR Compliance (International / EU Customers)
        </h2>
        <p className="mt-2 text-gray-700">
          For customers located in the European Union or European Economic Area,
          Asiago Travels complies with GDPR (EU Regulation 2016/679).
        </p>

        <h3 className="text-lg font-semibold mt-4">3.1 Lawful Basis for Processing</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Consent of the data subject</li>
          <li>Performance of a contract</li>
          <li>Legal obligations</li>
          <li>Legitimate business interests</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">3.2 Rights of Data Subjects</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Access personal data</li>
          <li>Rectify inaccurate or incomplete data</li>
          <li>Request erasure (Right to be Forgotten)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">3.3 International Data Transfers</h3>
        <p className="mt-2 text-gray-700">
          Personal data may be transferred outside the EU for service fulfillment.
          Such transfers are protected through appropriate contractual and security safeguards.
        </p>

        {/* DPDP */}
        <h2 className="text-xl font-semibold mt-6">
          4. DPDP Act, 2023 Compliance (India)
        </h2>

        <h3 className="text-lg font-semibold mt-4">4.1 Data Principal Rights</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Obtain information about personal data being processed</li>
          <li>Request correction or erasure of personal data</li>
          <li>Withdraw consent</li>
          <li>Grievance redressal</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">4.2 Consent & Purpose Limitation</h3>
        <p className="mt-2 text-gray-700">
          Personal data is collected with clear consent and used only for lawful,
          specified purposes related to travel services.
        </p>

        <h3 className="text-lg font-semibold mt-4">4.3 Data Retention</h3>
        <p className="mt-2 text-gray-700">
          Personal data is retained only for as long as required to meet business,
          legal, or regulatory obligations.
        </p>

        {/* CANCELLATION */}
        <h2 className="text-xl font-semibold mt-6">5. Cancellation & Refund Policy</h2>

        <h3 className="text-lg font-semibold mt-4">5.1 General Policy</h3>
        <p className="mt-2 text-gray-700">
          All cancellations must be requested in writing via email or official communication channels.
        </p>

        <h3 className="text-lg font-semibold mt-4">5.2 Refund Eligibility</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Refunds are subject to airline, hotel, and service provider policies</li>
          <li>Service charges and processing fees are non-refundable</li>
          <li>Promotional or discounted bookings may be non-refundable</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">5.3 Cancellation Timelines</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Flights: As per airline fare rules</li>
          <li>Hotels: As per hotel cancellation policy</li>
          <li>Tours & Packages: Charges vary based on cancellation date</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">5.4 Force Majeure</h3>
        <p className="mt-2 text-gray-700">
          No refunds are guaranteed for cancellations due to events beyond our control,
          including natural disasters, political unrest, pandemics, or government restrictions.
          Refunds (if applicable) are processed within 7–21 working days.
        </p>

        {/* COOKIES */}
        <h2 className="text-xl font-semibold mt-6">6. Cookies & Marketing</h2>
        <p className="mt-2 text-gray-700">
          We use cookies to enhance user experience. Users may opt out of marketing
          communications at any time.
        </p>

        {/* LIABILITY */}
        <h2 className="text-xl font-semibold mt-6">7. Limitation of Liability</h2>
        <p className="mt-2 text-gray-700">
          Asiago Travels acts as an intermediary between customers and service providers
          and is not liable for acts, delays, or defaults of third-party suppliers.
        </p>

        {/* JURISDICTION */}
        <h2 className="text-xl font-semibold mt-6">8. Jurisdiction & Governing Law</h2>
        <p className="mt-2 text-gray-700">
          All disputes shall be governed by the laws of India, with exclusive jurisdiction
          vested in the courts of Rajasthan, India.
        </p>

        {/* UPDATES */}
        <h2 className="text-xl font-semibold mt-6">9. Policy Updates</h2>
        <p className="mt-2 text-gray-700">
          Asiago Travels reserves the right to modify or update this policy at any time.
          Changes will be effective upon publication.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-6">10. Contact Information</h2>
        <p className="mt-2 text-gray-700">
          For privacy, data protection, or cancellation-related queries:
        </p>
        <p className="mt-1 text-gray-700 font-medium">
          Asiago Travels <br />
          Email: info@asiagotravels.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicypage;
