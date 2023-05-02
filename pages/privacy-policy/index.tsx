import type { NextPage } from "next";
import Head from "next/head";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p>
        We take your privacy seriously. This privacy policy outlines the types
        of personal information we collect and how we use and protect it. By
        using our website or services, you agree to the terms of this privacy
        policy.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Collection of Personal Information
      </h2>
      <p>
        We may collect personal information from you when you use our website or
        services, including your name, email address, phone number, and billing
        information. We may also collect information about your browsing
        behavior, such as the pages you visit and the links you click.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use of Personal Information
      </h2>
      <p>
        We use your personal information to provide you with our services,
        including processing your orders, managing your account, and
        communicating with you about our products and services. We may also use
        your information to improve our website and services, and to personalize
        your experience.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Disclosure of Personal Information
      </h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties unless we have your permission or are required by law
        to do so. However, we may share your information with trusted
        third-party service providers who help us operate our website and
        services.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Security of Personal Information
      </h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, we cannot guarantee
        that your information will be completely secure.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies and Tracking</h2>
      <p>
        We use cookies and other tracking technologies to collect information
        about your browsing behavior on our website. This information may be
        used to personalize your experience and to provide you with relevant
        advertisements. You can choose to disable cookies through your browser
        settings.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Changes to Privacy Policy
      </h2>
      <p>
        We reserve the right to update this privacy policy at any time. Any
        changes will be posted on our website and will take effect immediately.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about our privacy policy, please
        contact us at privacy@shoppingspreedeals.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
