// import React from "react";

export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 bg-black ">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-8 text-sm text-gray-500">Effective Date: 12/12/2024</p>

            <Section title="1. Acceptance of Terms">
                <p>
                    By accessing or using <strong>HeySolana</strong>, you confirm that you have read, understood, and agree to these Terms. If you do not agree, please do not use our Services.
                </p>
            </Section>

            <Section title="2. Eligibility">
                <p>
                    You must be at least 13 years old to use HeySolana. If you are using the Services on behalf of another person or entity, you must have the authority to accept these Terms on their behalf.
                </p>
            </Section>

            <Section title="3. Your Responsibilities">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Comply with all laws and regulations</li>
                    <li>Do not use HeySolana for any unlawful, abusive, or harmful purposes</li>
                    <li>No use of bots or automation unless authorized</li>
                    <li>Do not upload or distribute malicious software or code</li>
                </ul>
            </Section>

            <Section title="4. Accounts and Access">
                <p>
                    Some features of HeySolana may require an account. You are responsible for securing your account credentials and agree not to impersonate anyone or provide false information.
                </p>
            </Section>

            <Section title="5. Intellectual Property">
                <p>
                    All content and software provided by HeySolana—including voice models, UI components, branding, and code—is owned or licensed by us. You may not reproduce or redistribute our Services without permission.
                </p>
            </Section>

            <Section title="6. User Content">
                <p>
                    If you submit or transmit content through HeySolana, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display that content solely to operate and improve our Services.
                </p>
            </Section>

            <Section title="7. Third-Party Services">
                <p>
                    HeySolana may integrate with third-party services. We are not responsible for the actions, content, or policies of these third-party services.
                </p>
            </Section>

            <Section title="8. Termination">
                <p>
                    We may suspend or terminate your access to HeySolana at any time if we believe you are violating these Terms or harming the platform’s integrity.
                </p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
                <p>
                    HeySolana is provided “as is” and “as available.” We make no warranties, express or implied, about reliability, accuracy, or availability of the Services.
                </p>
            </Section>

            <Section title="10. Limitation of Liability">
                <p>
                    To the fullest extent permitted by law, HeySolana and its affiliates are not liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the Services.
                </p>
            </Section>

            <Section title="11. Governing Law">
                <p>
                    These Terms are governed by and construed in accordance with the laws of [Insert Country/State]. Disputes will be resolved in the courts of [Insert Jurisdiction].
                </p>
            </Section>

            <Section title="12. Changes to the Terms">
                <p>
                    We may update these Terms from time to time. If we make significant changes, we’ll notify you through the Service or by other means. Continued use means acceptance of the new Terms.
                </p>
            </Section>

            {/* <Section title="13. Contact Us">
                <p>If you have questions about these Terms, contact us at:</p>
                <ul className="mt-2 space-y-1">
                    <li>Email: [Insert Contact Email]</li>
                    <li>Company Name: HeySolana</li>
                    <li>Address: [Insert Address]</li>
                </ul>
            </Section> */}
        </div>
    );
}

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="space-y-2 text-base leading-relaxed text-gray-400">
                {children}
            </div>
        </section>
    );
}
