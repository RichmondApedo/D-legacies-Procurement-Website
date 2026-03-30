import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with D'LEGACIES E-PROCUREMENT CONSULT. Reach out to our Accra headquarters for elite sourcing and procurement inquiries via email, phone, or WhatsApp.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
