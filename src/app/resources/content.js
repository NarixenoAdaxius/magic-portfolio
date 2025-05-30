import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Arione John",
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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
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
    link: "",
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
  headline: <>Hi! I'm Arione ✌</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Palatte Mail</strong></>,
    href: "/work/palatte-mail",
  },
  subline: (
    <>
     I'm passionate about web development, technology, and building scalable applications. I occasionally share insights and ideas on these topics.
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
       A Versatile Full Stack Developer with 2+ years of hands-on experience building scalable web apps and enterprise tools. Comfortable working across the stack with JavaScript, Node.js, and SQL/NoSQL databases. Enjoys collaborating with teams in agile settings to turn ideas into reliable, user-friendly software. Passionate about writing clean code, learning new technologies, and solving real-world problems
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
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
          <>Led a team of 10 developers in the creation of efficient web systems including an event ticketing platform, automated email solutions, event dashboards, custom event forms, and the organization's landing website.</>,
          <>Provided training and mentorship of new developers.</>,
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
        description: <>BS in Computer Science</>,
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
              <li>JavaScript (ES6+), TypeScript, Java, C#, PHP, VB.Net</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>
            <ul>
              <li>Next.js, Node.js, CSS, HTML</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            <ul>
              <li>MongoDB, MariaDB, SQLite</li>
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
              <li>Git, GitHub, Figma, JIRA, Trello, Microsoft Office, Linux, Debian</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Other Skills",
        description: (
          <>
            <ul>
              <li>REST APIs, Google API, IoT, Unity</li>
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
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
