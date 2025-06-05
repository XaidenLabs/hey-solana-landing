import HeadSEO from "@/components/component/SEO/HeadSEO";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      <div className="space-y-2 text-base leading-relaxed text-gray-400">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <HeadSEO
        title="Privacy Policy - Hey Solana"
        description="Learn how Hey Solana, an AI Voice Powered Wallet, collects, uses, and protects your personal information for DeFi and crypto transactions."
        keywords="Hey Solana, privacy policy, AI wallet, DeFi, crypto transactions, data protection"
        pathname="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-400 bg-black">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-gray-500">Effective Date: 06/03/2025</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy - Hey Solana",
              url: "https://heysolana.yraylabs.fun/privacy-policy",
              description:
                "Learn how Hey Solana, an AI Voice Powered Wallet, collects, uses, and protects your personal information for DeFi and crypto transactions.",
            }),
          }}
        />

        <Section title="1. Introduction">
          <p>
            Welcome to <strong>Hey Solana</strong> ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our AI Voice Powered Wallet services, accessible via our website at{" "}
            <a href="https://heysolana.yraylabs.fun" className="text-blue-400 hover:underline">
              heysolana.yraylabs.fun
            </a>{" "}
            or through our mobile applications.
          </p>
          <p className="mt-2">
            By using our services, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of information when you interact with our services:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Personal Information</strong>: This includes your name, email address, phone number, billing information, and wallet addresses you provide during account creation or transactions.
            </li>
            <li>
              <strong>Usage Data</strong>: We collect data such as your IP address, browser type, pages visited, time spent on our site, and referring URLs to understand how you interact with our services.
            </li>
            <li>
              <strong>Device Information</strong>: Information like device type, operating system, and unique device identifiers to optimize your experience.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to enhance functionality, personalize your experience, and analyze usage patterns. You can manage your cookie preferences through your browser settings.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Providing, operating, and maintaining our AI Voice Powered Wallet services.</li>
            <li>Processing and securing your DeFi and crypto transactions.</li>
            <li>Sending updates, promotional offers, or important notices (you can opt-out of marketing communications).</li>
            <li>Analyzing usage to improve our services and enhance user experience.</li>
            <li>Complying with legal and regulatory obligations.</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>We do not sell your personal data. However, we may share your information in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Service Providers</strong>: We may share data with trusted third-party providers for payment processing, hosting, analytics, and customer support.
            </li>
            <li>
              <strong>Legal Authorities</strong>: We may disclose information when required by law, such as in response to a subpoena, or to protect our rights, safety, or property.
            </li>
            <li>
              <strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
            </li>
          </ul>
        </Section>

        <Section title="5. Your Rights and Choices">
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections or updates to your information.</li>
            <li>Request deletion of your data (subject to legal retention requirements).</li>
            <li>Object to or restrict certain types of data processing.</li>
            <li>Withdraw consent for processing where applicable (e.g., marketing emails).</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:heysolana4@gmail.com" className="text-blue-400 hover:underline">
              heysolana4@gmail.com
            </a>.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We implement industry-standard security measures, including encryption and secure protocols, to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, including providing our services and complying with legal obligations. For example, transaction data may be retained for auditing purposes as required by law.
          </p>
        </Section>

        <Section title="8. Children’s Privacy">
          <p>
            Our services are not intended for individuals under the age of 13. We do not knowingly collect personal data from children under 13. If you believe we have inadvertently collected such information, please contact us at{" "}
            <a href="mailto:heysolana4@gmail.com" className="text-blue-400 hover:underline">
              heysolana4@gmail.com
            </a>{" "}
            so we can promptly delete it.
          </p>
        </Section>

        <Section title="9. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy regularly.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:</p>
          <ul className="list-none mt-2 space-y-1">
            <li>
              <strong>Email</strong>:{" "}
              <a href="mailto:heysolana4@gmail.com" className="text-blue-400 hover:underline">
                heysolana4@gmail.com
              </a>
            </li>
            <li>
              <strong>Company Name</strong>: Hey Solana
            </li>
            <li>
              <strong>Address</strong>: 123 Blockchain Avenue, Crypto City, CA 90210, USA
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}