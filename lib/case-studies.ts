type CaseStudy = {
  slug: string;
  name: string;
  discipline: string;
  industry: string;
  image: string;
  mark: string;
  title: string;
  description: string;
  introduction: string;
  technologies: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    link?: { label: string; href: string };
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nexus-academy",
    name: "Nexus Academy",
    discipline: "Web development",
    industry: "Education",
    image: "academy",
    mark: "logo-nexus",
    title: "Nexus Academy: from course discovery to enrolment",
    description:
      "A learning platform that helps students explore courses and find their way to enrolment.",
    introduction:
      "For Nexus Academy, a Tunisian online learning platform, Dynamis developed the website students use to explore courses and take the next step towards signing up.",
    technologies: ["React", "Next.js", "Node.js"],
    sections: [
      {
        heading: "The student’s decision",
        paragraphs: [
          "A prospective student arrives with two questions. Is there a course for what I want to learn? Once I have chosen one, how do I enrol? The first question belongs to course discovery. The second belongs to registration. The project connected those two parts of the experience.",
        ],
      },
      {
        heading: "What Dynamis delivered",
        paragraphs: [
          "Our work covered the public web experience, from navigating the course offering to finding the sign-up path. On an education site, that transition matters: a visitor who has already chosen a course should be able to act on that choice without having to work out where admissions begins.",
          "The website used React and Next.js with Node.js. The project’s focus was the student-facing journey through the site.",
        ],
      },
      {
        heading: "A useful test for an education website",
        paragraphs: [
          "Ask a prospective learner to start at the homepage, find a course that fits their goal and point out where they would enrol. Watch where they stop to re-read or look for directions. Those moments identify specific pages to improve and give an admissions team a more useful brief than a request to redesign the entire site.",
        ],
      },
    ],
  },
  {
    slug: "moutouri",
    name: "Moutouri",
    discipline: "Digital product",
    industry: "Marketplace",
    image: "moutouri",
    mark: "moutouri_logo",
    title: "Moutouri: a mobile-first motorbike marketplace in Tunisia",
    description:
      "A mobile-first marketplace that makes it easier for riders to discover their next motorbike.",
    introduction:
      "Dynamis built and launched Moutouri for the Tunisian two-wheeler market. A rider looking for a scooter, an owner selling a motorbike and a shop selling equipment each need a different starting point.",
    technologies: ["Next.js", "React", "TypeScript"],
    sections: [
      {
        heading: "From a phone to a relevant listing",
        paragraphs: [
          "A rider who already knows the model can start by searching for it. Someone still exploring can open the catalogue and browse bikes and scooters. A seller has a separate route to publish a listing with photos and a description. Professional shops have their own space for parts and equipment.",
          "Dynamis delivered the mobile-friendly marketplace using Next.js, React and TypeScript. You can follow the buying and selling journeys on the public site.",
        ],
        link: {
          label: "Explore the Moutouri marketplace",
          href: "https://www.moutouri.tn/",
        },
      },
      {
        heading: "What the first month showed",
        paragraphs: [
          "In its first-month launch report, Dynamis recorded 11,920 unique visitors to Moutouri and more than 280 clicks through to partners Kayco Motors and Let’s Ride. The team reported zero advertising spend during that period.",
          "The visitor count describes how many people reached the marketplace. The partner clicks capture a different action: someone choosing to continue from Moutouri to a partner. These figures describe the launch period.",
        ],
        link: {
          label: "Read the first-month report from Dynamis on LinkedIn",
          href: "https://www.linkedin.com/posts/dynamis-solution_moutouritn-activity-7490053377280761856-JzIL",
        },
      },
    ],
  },
];

export function caseStudyPath(project: CaseStudy) {
  return `/work/${project.slug}`;
}
