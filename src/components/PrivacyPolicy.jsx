import React from "react";

const PrivacyPolicy = (props) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-smoke-light flex ${props.show ? 'block' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className="relative p-8 bg-white w-full max-w-3xl m-auto flex-col flex rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold" id="contained-modal-title-vcenter">
            Terms And Conditions Of Our Services
          </h3>
          <button className="text-black close" onClick={props.onHide}>
            <span>&times;</span>
          </button>
        </div>
        <div className="py-4 text-left">
          <h4 className="text-xl font-semibold mb-4">Privacy Policy</h4>
          <p className="mb-4">
            Welcome to AllTraxs! We are committed to protecting your privacy and
            providing a safe online experience for all our users. This Privacy
            Policy outlines how we collect, use, and disclose your information
            when you use our website and services.
          </p>
          <ol className="list-decimal pl-4 mb-4">
            <li>
              <strong>Information We Collect</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  <strong>Personal Information:</strong> When you register for an
                  account, we may collect your name, email address, and other
                  contact details.
                </li>
                <li>
                  <strong>Usage Information:</strong> We gather information about
                  how you interact with our website, such as your browsing
                  history, search queries, and song preferences.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information
                  about the device you use to access our services, including IP
                  address, browser type, and operating system.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Your Information</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  <strong>To Provide Services:</strong> We use your information to
                  operate our website, personalize your experience, and deliver
                  the services you request.
                </li>
                <li>
                  <strong>Communication:</strong> We may send you service-related
                  communications, such as account notifications and updates.
                </li>
                <li>
                  <strong>Analytics:</strong> We analyze user trends and
                  preferences to improve our website and services.
                </li>
              </ul>
            </li>
            <li>
              <strong>Sharing of Your Information</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share
                  your information with third-party service providers who help us
                  operate our website and provide services.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose your
                  information when required by law or to protect our rights.
                </li>
              </ul>
            </li>
            <li>
              <strong>Your Choices</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  <strong>Account Settings:</strong> You can update your account
                  information and communication preferences through your account
                  settings.
                </li>
                <li>
                  <strong>Cookies:</strong> You can manage cookies through your
                  browser settings.
                </li>
              </ul>
            </li>
            <li>
              <strong>Security</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  We implement security measures to protect your information from
                  unauthorized access and misuse.
                </li>
              </ul>
            </li>
            <li>
              <strong>Children’s Privacy</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  Our services are not intended for children under the age of 13.
                  We do not knowingly collect personal information from children.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to This Privacy Policy</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on our
                  website.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  If you have any questions or concerns about this Privacy Policy
                  or our privacy practices, please contact us at Contact Page.
                </li>
              </ul>
            </li>
          </ol>
          <h4 className="text-xl font-semibold mb-4">Terms of Service</h4>
          <p className="mb-4">
            Welcome to AllTraxs! These Terms of Service govern your use of our
            website and services.
          </p>
          <ol className="list-decimal pl-4 mb-4">
            <li>
              <strong>Acceptance of Terms</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  By accessing or using our website, you agree to these Terms of
                  Service and our Privacy Policy.
                </li>
              </ul>
            </li>
            <li>
              <strong>Use of Services</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  You may use our website and services for personal,
                  non-commercial purposes.
                </li>
                <li>
                  You agree not to engage in any activity that disrupts or
                  interferes with our website or services.
                </li>
              </ul>
            </li>
            <li>
              <strong>User Accounts</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  You must create an account to access certain features of our
                  website.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your
                  account information and for all activities that occur under your
                  account.
                </li>
              </ul>
            </li>
            <li>
              <strong>Content</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  You retain ownership of any content you upload or share on our
                  website.
                </li>
                <li>
                  By uploading content, you grant us a non-exclusive, worldwide
                  license to use, reproduce, and distribute the content.
                </li>
              </ul>
            </li>
            <li>
              <strong>Prohibited Activities</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  You agree not to engage in any unlawful or prohibited activities
                  while using our website.
                </li>
                <li>
                  You agree not to upload or share any content that infringes on
                  the rights of others.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  We are not liable for any damages arising out of or in
                  connection with your use of our website.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to Terms</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  We may update these Terms of Service from time to time. We will
                  notify you of any changes by posting the updated terms on our
                  website.
                </li>
              </ul>
            </li>
            <li>
              <strong>Governing Law</strong>
              <ul className="list-disc pl-4 mb-2">
                <li>
                  These Terms of Service are governed by the laws of AllTraxs
                  guidelines.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex justify-end pt-3 border-t">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={props.onHide}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.onHide}
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
