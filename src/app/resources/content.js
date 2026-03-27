import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Arione John C.",
  lastName: "Dauis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Developer",
  avatar: "/images/avatar.png",
  email: "dauis.arionejohn@gmail.com",
  location: "Asia/Manila",
  languages: [],
};

const newsletter = {
  display: false,
  title: (
    <>
      Subscribe to {person.firstName}
      {"'"}s Newsletter
    </>
  ),
  description: (
    <>
      I occasionally write about web development, technology, and share insights on building scalable applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NarixenoAdaxius",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arione-dauis/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/639619951286",
  },
  {
    name: "Contact Number",
    icon: "phone",
    link: "tel:+639058443808",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Hi! I{"'"}m Arione ✌
    </>
  ),
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Bug Hunter</strong></>,
    href: "/work/bug-hunter",
  },
  subline: (
    <>
      Versatile full stack developer with 3+ years building scalable web apps, internal tools, and AI-assisted workflows. I work across JavaScript/TypeScript, Node.js, Next.js, and SQL/NoSQL—from POC to production—and I care about developer productivity and systems that solve real problems.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Versatile full stack developer with 3+ years of experience building scalable web applications, internal developer tools, and AI-powered workflows. Experienced with JavaScript/TypeScript, Node.js, Next.js, and SQL/NoSQL databases, designing end-to-end systems from proof-of-concept to production. I have led development teams and translated product requirements into working prototypes and solutions. I am passionate about developer productivity, AI-assisted development, and efficient, scalable systems that solve real-world problems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "American Sourcing Group (ASG Platform)",
        timeframe: "Sept 2025 - Mar 2026",
        role: "Software Developer",
        achievements: [
          <>Led a development team in translating Product Requirement Documents (PRDs) into working Proofs of Concept (POCs) to validate new features and technical approaches.</>,
          <>Developed internal VS Code tools integrated with AI, improving team productivity and development speed by ~30%.</>,
          <>Built and tested AI-driven pipelines and workflow automations, enabling rapid prototyping and evaluation of new solutions.</>,
        ],
        images: [],
      },
      {
        company: "Dream PC Builds & IT Solutions Inc.",
        timeframe: "Mar 2025 - May 2025",
        role: "IT Intern",
        achievements: [
          <>Collaborated in technology rollouts, system maintenance, and team IT projects.</>,
          <>Restructured and developed a custom Point of Sales (POS) system tailored to company operations.</>,
          <>Spearheaded the planning and installation of the company server infrastructure with Ubuntu Server.</>,
        ],
        images: [],
      },
      {
        company: "ALPHA: Alliance of Leading Programmers through Heuristic Adaptation",
        timeframe: "Jan 2024 - Dec 2024",
        role: "Full Stack Head Web Developer",
        achievements: [
          <>Led a team of 10 developers building efficient web systems—event ticketing, automated email, event dashboards, custom event forms, and the organization landing website—eliminating reliance on third-party applications.</>,
          <>Provided training and mentorship for new developers on organization workflows.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "STI Colleges Ortigas-Cainta",
        description: <>BS in Computer Science — Cum Laude · Graduation: Jul 2025</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>
            <ul>
              <li>JavaScript, TypeScript, Java, C#, PHP, HTML, CSS</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Frameworks & Runtimes",
        description: (
          <>
            <ul>
              <li>Next.js, Node.js</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Databases & Data Stores",
        description: (
          <>
            <ul>
              <li>MongoDB, MariaDB, SQLite, Redis, etcd</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>
            <ul>
              <li>Git, GitHub, Figma, JIRA, Docker, Linux, Debian, Microsoft Office</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "APIs, AI & Other",
        description: (
          <>
            <ul>
              <li>REST APIs, gRPC, Google API, OpenAI API, IoT</li>
              <li>Claude Code, Cursor, Antigravity</li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about web development and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `A collection of my certifications`,
  images: [ {
    src: "/images/gallery/horizontal-1.jpg",
    alt: "image",
    orientation: "horizontal",
  }],
};

export { person, social, newsletter, home, about, blog, work, gallery };
