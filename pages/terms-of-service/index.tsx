import type { NextPage } from "next";

const TermsOfService: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-6">
        Welcome! These terms of service (&quot;Terms&quot;) govern your use of
        our website and services. By accessing our website or using our
        services, you agree to these Terms. Please read them carefully.
      </p>
      <h2 className="text-lg font-bold mb-3">Use of Services</h2>
      <p className="mb-6">
        You may use our website and services only for lawful purposes and in
        accordance with these Terms. You agree not to use our website or
        services for any illegal or unauthorized purpose, or to engage in any
        activity that may harm our website, services, or users.
      </p>
      <h2 className="text-lg font-bold mb-3">User Content</h2>
      <p className="mb-6">
        Our website may allow you to upload, submit, store, or publish content,
        including but not limited to text, photos, videos, and comments. You
        retain ownership of any content you submit, but by submitting content to
        our website, you grant us a worldwide, non-exclusive, royalty-free,
        transferable, and sublicensable license to use, copy, modify, create
        derivative works based on, distribute, publicly display, publicly
        perform, and otherwise exploit in any manner such content in all formats
        and distribution channels now known or hereafter devised (including in
        connection with the Services and Shopping Spree Deals’s business and on
        third-party sites and services), without further notice to or consent
        from you, and without the requirement of payment to you or any other
        person or entity.
      </p>
      <h2 className="text-lg font-bold mb-3">Intellectual Property</h2>
      <p className="mb-6">
        The contents of our website and services, including but not limited to
        text, graphics, images, logos, trademarks, and software, are the
        property of SSD or its licensors and are protected by copyright,
        trademark, and other laws. You may not copy, modify, distribute, or
        reproduce any part of our website or services without our prior written
        consent.
      </p>
      <h2 className="text-lg font-bold mb-3">User Conduct</h2>
      <p className="mb-6">
        You agree to use our website and services only for lawful purposes and
        in accordance with these Terms. You agree not to engage in any conduct
        that may harm our website, services, or users, including but not limited
        to:
        <ul className="list-disc list-inside ml-6 mb-6">
          <li>
            Using our website or services to transmit, distribute, or store any
            material that is defamatory, obscene, offensive, or harmful;
          </li>
          <li>
            Interfering with or disrupting the operation of our website or
            services, or attempting to gain unauthorized access to our systems;
          </li>
          <li>
            Using our website or services to transmit, distribute, or store any
            material that is unlawful, fraudulent, or misleading;
          </li>
        </ul>
      </p>
    </div>
  );
};

export default TermsOfService;
