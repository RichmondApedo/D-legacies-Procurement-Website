import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Sourcing Quote",
  description: "Initiate your procurement requirement with D'LEGACIES. Submit your technical specifications directly to our executive team for institutional-grade sourcing and global logistics solutions.",
};

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
