import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Executive Team",
  description: "Reach out to D'LEGACIES E-PROCUREMENT CONSULT. Direct lines to our Accra headquarters for sourcing inquiries, logistics support, and strategic partnerships.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
