import React from "react";

 const PrivacyPolicypage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Your privacy is important to us. This Privacy Policy explains how we collect,
          use, and protect your information when you visit our website or book a travel package.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Personal details (name, email, phone number, address)</li>
          <li>Booking details (travel dates, preferences, ID proof)</li>
          <li>Payment information (processed securely through third-party gateways)</li>
          <li>Browser and device information (cookies, IP address)</li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Process bookings and payments</li>
          <li>Send booking confirmations and updates</li>
          <li>Improve our website and services</li>
          <li>Provide customer support</li>
          <li>Send promotional emails (optional)</li>
        </ul>

        {/* 3. Sharing Your Information */}
        <h2 className="text-xl font-semibold mt-6">3. Sharing Your Information</h2>
        <p className="mt-2 text-gray-700">
          We may share your information with:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Travel partners (hotels, airlines, tour operators)</li>
          <li>Payment gateway providers</li>
          <li>Legal authorities (only if required by law)</li>
        </ul>
        <p className="mt-3 text-gray-700 font-medium">
          We do <span className="font-bold">not</span> sell your personal information.
        </p>

        {/* 4. Cookies */}
        <h2 className="text-xl font-semibold mt-6">4. Cookies</h2>
        <p className="mt-2 text-gray-700">
          We use cookies to improve your browsing experience. You can disable cookies through
          your browser settings.
        </p>

        {/* 5. Data Security */}
        <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
        <p className="mt-2 text-gray-700">
          We use industry-standard security practices to protect your data. However, no online
          system is 100% secure.
        </p>

        {/* 6. Your Rights */}
        <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Request access to your data</li>
          <li>Ask us to update or delete your information</li>
          <li>Opt-out of marketing emails</li>
        </ul>
      </div>
    </div>
  );
};
export default PrivacyPolicypage