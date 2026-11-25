import { AgencyHomepage } from "@/components/home/agency-homepage";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata(
  "Digital Agency in Tunisia for Web Design, Branding & AI",
  "Explore websites, brand identities, AI workflows and digital marketing by Dynamis Solution in Tunisia. See client projects and discuss your brief with our team.",
  "/",
);

export default function HomePage() {
  return <AgencyHomepage />;
}
