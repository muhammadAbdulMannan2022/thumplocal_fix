import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16 ">
        <h1 className="text-4xl md:text-[43px] font-bold text-[#4D4D4D] mb-8">
          <span className="text-[#5A4AEB]">Privacy</span> Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <p className="text-[20px]">
              Thank you for visiting [Your Website Name] ("we", "us", "our").
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              visit or interact with our website [www.yourwebsite.com] (the
              "Site").
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[20px]">
              <li>
                <strong>Personal Information:</strong> Such as your name, email
                address, phone number, etc. (only when you submit it
                voluntarily, e.g., through contact forms or account
                registration).
              </li>
              <li>
                <strong>Usage Data:</strong> Including your IP address, browser
                type, device type, pages visited, time spent on the site, and
                other analytics information.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We may use
                cookies to enhance your experience, analyze site traffic, and
                improve our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide and maintain our website.</li>
              <li>To respond to your inquiries or provide customer support.</li>
              <li>
                To send you updates, newsletters, or marketing communications
                (you can opt out).
              </li>
              <li>
                To analyze and improve the performance and content of our site.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              3. Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell your personal data. We may share your information
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Service Providers:</strong> Who assist in operating our
                site or servicing you.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              4. Your Rights and Choices
            </h2>
            <p className="mb-4">You may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing communications.</li>
              <li>
                To exercise any of these rights, contact us at: [your@email.com]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              5. Security
            </h2>
            <p className="text-muted-foreground">
              We take reasonable precautions to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-muted-foreground">
              Our website may contain links to other websites. We are not
              responsible for their privacy practices or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-muted-foreground">
              Our service is not directed to children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Effective Date."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              9. Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              [your@email.com] [Your Address, City, Country]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
