import Timeline from "../components/Timeline";

export default function PRJourney() {
  const checkpoints = [
    {
      id: 0,
      position: 5,
      title: "Study",
      period: "Nov 2025 – Apr 2026",
      duration: "6 months",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      details: [
        "Continue part-time software engineering at University of Newcastle",
        "Build work experience that counts for skills assessment",
      ],
    },
    {
      id: 1,
      position: 13,
      title: "Assessment",
      period: "Apr 2026",
      duration: "1 month",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      details: ["Positive outcome for software engineering occupation"],
    },
    {
      id: 2,
      position: 17,
      title: "Application",
      period: "Apr 2026",
      duration: "Instant",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      details: [
        "NSW Nomination (Pathway 3 – Regional) application",
        "Include partner as secondary applicant (skilled + superior English)",
        "Points test: age, education, work experience, partner points",
        "Lodge 491 application immediately after graduation",
      ],
    },
    {
      id: 3,
      position: 25,
      title: "Processing",
      period: "Apr 2026 – Decision",
      duration: "6-8 months",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      details: [
        "Optionally apply for 485 visa if needed",
        "Processing time: several months",
      ],
    },
    {
      id: 4,
      position: 60,
      title: "3 Years",
      period: "2026–2029",
      duration: "3 years",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      details: [
        "Start regional business earning ≥ $53,900/year",
        "Optional: continue remote work for Sydney company",
        "Maintain regional residence & compliance",
      ],
    },
    {
      id: 5,
      position: 68,
      title: "PR Apply",
      period: "2029",
      duration: "1 month",
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      details: [
        "Must have held 491 for ≥3 years",
        "Regional business income ≥ $53,900/year",
        "Lived in Newcastle for required period",
      ],
    },
    {
      id: 6,
      position: 78,
      title: "PR Granted",
      period: "2029–2030",
      duration: "6-12 months",
      color: "bg-teal-500",
      textColor: "text-teal-500",
      details: [
        "Become permanent resident",
        "Free to live & work anywhere in Australia",
      ],
    },
    {
      id: 7,
      position: 92,
      title: "Citizenship",
      period: "2030–2032",
      duration: "2+ years",
      color: "bg-red-500",
      textColor: "text-red-500",
      details: [
        "After 1 year as PR + 4 years total residence",
        "Meet travel and character requirements",
      ],
    },
  ];

  return (
    <Timeline
      checkpoints={checkpoints}
      title="Australian PR Journey"
      subtitle="Interactive timeline of your adventure"
    />
  );
}
