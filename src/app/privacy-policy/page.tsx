
export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray bg-black">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-8 text-sm text-gray-500">Effective Date: 12/12/2024</p>

            <Section title="1. Introduction">
                <p>
                    Welcome to <strong>HeySolana</strong> ("we", "our", or "us"). We value your privacy and are committed to protecting your personal data.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our [website/app/service].
                </p>
                <p className="mt-2">If you do not agree with the terms of this Privacy Policy, please do not use our services.</p>
            </Section>

            <Section title="2. Information We Collect">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Personal Information</strong>: Such as name, email address, phone number, and billing information.</li>
                    <li><strong>Usage Data</strong>: Including your IP address, browser type, pages visited, time spent, and referring URLs.</li>
                    <li><strong>Device Information</strong>: Such as device type, OS, and unique device identifiers.</li>
                    <li><strong>Cookies and Tracking Technologies</strong>: To improve functionality and personalize your experience.</li>
                </ul>
            </Section>

            <Section title="3. How We Use Your Information">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions</li>
                    <li>Sending updates, promotions, or important notices</li>
                    <li>Improving our services and customer experience</li>
                    <li>Complying with legal obligations</li>
                </ul>
            </Section>

            <Section title="4. How We Share Your Information">
                <p>We do not sell your personal data. We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li><strong>Service Providers</strong>: For payment processing, hosting, analytics, and support</li>
                    <li><strong>Legal Authorities</strong>: When required by law or to protect our rights</li>
                    <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or asset sale</li>
                </ul>
            </Section>

            <Section title="5. Your Rights and Choices">
                <p>Depending on your location, you may have rights including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Access to the data we hold about you</li>
                    <li>Request corrections or deletions</li>
                    <li>Object to or restrict data processing</li>
                    <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-2">To exercise these rights, contact us at: [Insert Contact Email]</p>
            </Section>

            <Section title="6. Data Security">
                <p>
                    We implement industry-standard measures to protect your personal information. However, no method of transmission over
                    the Internet or method of electronic storage is 100% secure.
                </p>
            </Section>

            <Section title="7. Data Retention">
                <p>
                    We retain your information only as long as necessary to fulfill the purposes outlined in this policy,
                    unless a longer retention period is required by law.
                </p>
            </Section>

            <Section title="8. Children’s Privacy">
                <p>
                    Our services are not directed to individuals under 13. We do not knowingly collect personal data from children.
                    If you believe we have inadvertently collected such information, contact us to delete it.
                </p>
            </Section>

            <Section title="9. Changes to This Policy">
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </p>
            </Section>

            <Section title="10. Contact Us">
                <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                <ul className="mt-2">
                    <li>Email: heysolana4@gmail.com</li>
                    <li>Company Name: HeySolana</li>
                    {/* <li>Address: </li> */}
                </ul>
            </Section>
        </div>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="space-y-2 text-base leading-relaxed text-gray-400">{children}</div>
        </section>
    );
}
