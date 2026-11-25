import { AgencyHomepage } from "@/components/home/agency-homepage";
import {
  agencyTitle,
  agencyDescription,
  pageMetadata,
} from "@/lib/site-metadata";

export const metadata = pageMetadata(agencyTitle, agencyDescription, "/");

export default function HomePage() {
  return <AgencyHomepage />;
}
