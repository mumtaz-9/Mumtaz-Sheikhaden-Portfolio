// PROJECT DATA (same skeleton data, can be shared or imported)
const PROJECTS = {
  navable: {
    title: "NavAble",
    tagline: "An accessible UW campus navigation application.",
    role: "UX Designer / Researcher",
    duration: "Jan 2026 - Present",
    tools: ["Figma", "React Native", "Google Api"],
    status: "40% Complete til MVP",
//test
    hero: "assets/Screenshot 2026-04-08 at 11.57.25 PM.png",
    overview: "NavAble is an accessibility focused navigation platform designed to help students, faculty, and visitors navigate the University of Washington campus with safety. The app provides customizable routing based on individual accessibility needs, such as step free paths, elevator access, and low traffic routes. By integrating real time alerts, community reported hazards, and detailed building information, NavAble reduces uncertainty and improves mobility for underserved users, including those with disabilities, anxiety, or unfamiliarity with the campus.",
problem: "The University of Washington campus presents accessibility and safety challenges due to steep terrain, frequent construction, and limited visibility of accessible entrances. Existing navigation tools rely on static maps and do not account for real time disruptions or diverse user needs, forcing users to piece together information across multiple platforms and increasing cognitive and physical strain.",
goals: [
    "Provide reliable, accessibility aware navigation across campus",
    "Reduce uncertainty through real time alerts and hazard reporting",
    "Centralize accessibility, safety, and building information",
    "Support diverse user needs through customizable preferences"
  ],
    process: ["Identify accessibility and navigation pain points on campus",
              "Conduct research on existing navigation tools and accessibility gaps",
              "Map user journeys and develop wireframes for key features",
              "Design accessible UI and customizable user preference systems",
              "Develop core features such as routing, alerts, and reporting",
              "Test usability and refine based on user feedback and real world scenarios"],
team_contributions: "As a team, we conducted research, defined the problem space, and collaborated on feature prioritization and design decisions. We worked together to align on accessibility goals, develop wireframes, and ensure the product addressed real user needs through iterative feedback and discussion.",

  individual_contributions: "I contributed as a UX Designer and Researcher by helping define user needs, developing wireframes and interface designs, and focusing on accessibility in the user experience. I also participated in usability testing and translated research insights into design improvements, strengthening my ability to design for inclusive and real world scenarios.",

  key_features: [
    "Accessibility aware routing with ramps, elevators, and entrances",
    "Real time hazard and obstruction reporting",
    "Customizable accessibility preferences",
    "Interactive 2D/3D campus map",
    "Building information and accessibility layers"
  ],
    gallery: ["assets/Screenshot 2026-04-08 at 11.55.53 PM.png", "assets/Screenshot 2026-04-08 at 11.56.13 PM.png"],
    outcome: "NavAble establishes a foundation for a more inclusive and responsive campus navigation experience. Early insights highlight the importance of real time information, accessibility aware routing, and community driven updates. Next steps include developing a functional MVP, validating routing accuracy and usability, and preparing for broader campus testing and potential expansion.",
next_steps: [
    "Develop and test a functional MVP",
    "Validate routing accuracy and accessibility features",
    "Refine UI for accessibility (contrast, screen reader support)",
    "Conduct broader user testing across campus",
    "Prepare for potential launch and future feature expansion"
  ],

  learnings: [
    "Accessibility extends beyond physical design to include digital interfaces",
    "Real time data significantly impacts user trust and usability",
    "Designing for edge cases improves the experience for all users",
    "Collaboration is essential when solving complex, real world problems"
  ]
  },
  studybuddy: {
    title: "StudyBuddy",
    tagline: "A peer to peer student collaboration platform.",
    role: "Solo Designer / Developer",
    duration: "Dec 2024 - Present",
    tools: ["Figma", "React", "Supabase", "Tailwind CSS"],
    status: "40% Complete til MVP",
//test
    hero: "assets/StudyBuddy-1.png",
    overview: "StudyBuddy is a collaborative learning platform designed to help students find reliable, cost-effective peer tutors and connect based on shared courses and skill exchange. The project aims to enhance the quality of tutoring by pairing students with tutors who are best suited to their individual academic needs. In addition, StudyBuddy centralizes study resources to reduce the barriers students often face when searching for support materials, making academic help more accessible and equitable.",
    process: ["Identify student pain points around studying",
              "Researching existing study tools and workflows",
              "Sketching user flows and wireframes",
              "Designing UI and interaction patterns",
              "Developing core features",
              "Testing usability and refining the experience"],
    gallery: ["assets/dashboard.png", "assets/find-tutors.png"],
    outcome: "This project focuses on establishing a strong foundation for a peer driven academic support platform. Early research highlights a demand for cost-effective tutoring and skill-based student matching. Next steps include launching the MVP, campus outreach, and exploring funding opportunities to grow StudyBuddy as a student-centered startup."
  },
  bioinformatics: {
    title: "Bioinformatics Research @ UW School of Environmental & Forest Sciences: Plant Microbiology",
    tagline: "Advancing Crop Health: Developing strain-specific primers (SSPs) for endophyte identification using PCR Methodologies.",
    role: "Undergrad Researcher",
    duration: "June 2023 - Sept 2024",
    tools: ["R", "Markdown", "Geneious Prime", "Unix & Bash Scripting"],
    status: "100% Complete",
    hero: "assets/second-presentation.png",
    pdf: "assets/Strain Specific Primers (SSPs) Protocol.pdf",
    overview: "This project focused on Endophytes, tiny organisms that live inside plants. We wanted to find a way to identify exactly which strain a specific endophyte belongs to. To do this, we used PCR (a methodology for magnifying DNA) and Strain Specific Primers (SSPs, which are an advanced technique used to identify special endophyte DNA sequences).",
    process: ["Download and organize raw genomic data",
              "Shred genomes into uniform segments",
              "Filter for unique sequences through local \"Blasting\"",
              "Verify uniqueness against global NCBI databases",
              "Design Strain-Specific Primers (SSPs)",
              "Map and validate primers on the original genome",
              "Build a searchable digital library",
              "Establish standardized design protocols"],
    gallery: ["assets/first-presentation.png", "assets/research-presentation.png", "assets/protocol.png"],
    outcome: "The project successfully delivered precise primers identifying specific endophytes through the development of Strain-Specific Primers (SSPs) for the DOE, Specialty Crops, and Synergy strains. By identifying them through global database filtering and genomic mapping, the research produced high fidelity primers that ensure exclusive detection via PCR without cross-reactivity. These tools are integrated into an interactive R Quarto searchable table, centralizing critical technical data like to streamline lab operations. Furthermore, the establishment of a formal Standard Operating Procedure (SOP) provides a reproducible framework for future research, transforming raw genomic data into a functional, organized, and reliable system for strain-level identification."
  },
  changeability: {//Important
    title: "Changeability",
    tagline: "Empowering Personal Sustainability: Scanning Waste and Tracking Footprints for a Greener Tomorrow.",
    role: "UX Designer & Researcher",
    duration: "2023",
    tools: ["Figma"],
    status: "Complete",
    hero: "assets/changeability.png",
    video: "assets/Changeability - SMACK(T).mp4", // Path to your .mp4
    pdf: "assets/Group Project SMACK (T) (1).pdf",
    overview: "Changeability is an all in one sustainability app designed to reduce individual waste and carbon emissions by transforming daily habits. Developed to address the confusion surrounding climate change contributors, the app provides users with tools to independently track their environmental impact. It bridges the gap between high-level climate data and personal action by offering a convenient way to manage waste, monitor dietary carbon footprints, and visualize overall sustainability improvements.",
    process: ["Problem Identification",
              "Feature Engineering",
              "Information Architecture Design",
              "Policy and Ethical Review",
              "Impact Analysis"],
    gallery: ["assets/changeability.png"],
    outcome: "The Changeability project created a user-friendly app designed to help people lower their environmental impact by changing their daily habits. A key feature is the waste scanner, which identifies items like plastic bottles and tells you exactly how to recycle or compost them to avoid mistakes. The app also tracks your carbon footprint by looking at what you eat, how you travel, and the utilities you use, showing your progress through simple monthly charts. To make learning fun, it includes educational cartoons and articles that explain sustainability for all ages. By showing people the real-world impact of their choices, the app helps them move toward a cleaner, more sustainable lifestyle."
  },
/*chique: {
    title: "Bioinformatics Research",
    tagline: "Skeleton tagline",
    role: "Designer",
    duration: "2024",
    tools: ["Figma"],
    status: "80% Complete",
    hero: "assets/images/bioinformatics/hero.png",
    overview: "Skeleton overview for Bioinformatics project.",
    process: ["Step 1", "Step 2", "Step 3"],
    gallery: ["assets/images/bioinformatics/1.png"],
    outcome: "Skeleton outcome for Bioinformatics."
  },*/
  eatTogether: { //Important
    title: "Eat Together",
    tagline: "Building Community Through Food: Leading the Design and Strategy for UW’s Social Dining App.",
    role: "Lead Designer & Researcher",
    duration: "2023",
    tools: ["Figma, Canva, ClickUp"],
    status: "In Progress",
    hero: "assets/eattogetherdesigns.png",
    liveSite: "https://www.eat-together.org/",
    pdf: "assets/Eat Together Poster (1).pdf",
    overview: "Eat Together is a mobile application developed at the University of Washington to tackle student isolation by connecting peers through shared meals. As the Lead Designer, I managed the design team and acted as the bridge between creative vision and technical execution. My role was to refine the app’s user experience to ensure intuitive social discovery and spearhead the marketing design strategy to drive campus-wide adoption.",
    process: ["Design Interviews & Surveys",
              "Cross-Functional Collaboration",
              "App Refinement",
              "Marketing & Outreach",
              "System Integration"],
    gallery: [],
    outcome: "The project resulted in a student-centered application that successfully launched at UW. Under my leadership, the design team delivered a streamlined user interface that made finding dining companions effortless. The marketing campaign, driven by my custom poster designs, successfully established Eat Together as a recognizable campus brand. Ultimately, the app evolved from a conceptual tool into a functional community-building platform, bridging the gap between digital interaction and real-world social connection."
  },/*
mlhHackathon: {
    title: "Bioinformatics Research",
    tagline: "Skeleton tagline",
    role: "Designer",
    duration: "2024",
    tools: ["Figma"],
    status: "80% Complete",
    hero: "assets/images/bioinformatics/hero.png",
    overview: "Skeleton overview for Bioinformatics project.",
    process: ["Step 1", "Step 2", "Step 3"],
    gallery: ["assets/images/bioinformatics/1.png"],
    outcome: "Skeleton outcome for Bioinformatics."
  },
  infoHackathon: { //Important
    title: "Changeability",
    tagline: "Skeleton tagline",
    role: "Designer",
    duration: "2023",
    tools: ["Figma"],
    status: "In Progress",
    hero: "assets/images/changeability/hero.png",
    overview: "Skeleton overview for Changeability project.",
    process: ["Step 1", "Step 2"],
    gallery: [],
    outcome: "Skeleton outcome for Changeability."
  },
  truckCalculator: {//Important
    title: "Bioinformatics Research",
    tagline: "Skeleton tagline",
    role: "Designer",
    duration: "2024",
    tools: ["Figma"],
    status: "80% Complete",
    hero: "assets/images/bioinformatics/hero.png",
    overview: "Skeleton overview for Bioinformatics project.",
    process: ["Step 1", "Step 2", "Step 3"],
    gallery: ["assets/images/bioinformatics/1.png"],
    outcome: "Skeleton outcome for Bioinformatics."
  },
  passwordGenerator: {
    title: "Changeability",
    tagline: "Skeleton tagline",
    role: "Designer",
    duration: "2023",
    tools: ["Figma"],
    status: "In Progress",
    hero: "assets/images/changeability/hero.png",
    overview: "Skeleton overview for Changeability project.",
    process: ["Step 1", "Step 2"],
    gallery: [],
    outcome: "Skeleton outcome for Changeability."
  },*/
};
