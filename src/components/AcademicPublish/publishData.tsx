import { AcademicPublish } from "@/types/academicpublish";

const blogData: AcademicPublish[] = [
  {
    id: 1,
    title: "GraphDART: Graph Distillation for Efficient Advanced Persistent Threat Detection",
    paragraph:
      "GraphDART, a modular framework designed to distill provenance graphs into compact yet informative representations, enabling scalable and effective anomaly detection.",
    image: "/images/academicpublish/pub-01.jpg",
    author: {
      name: "Saba Fathi Rabooki",
      image: "/images/academicpublish/author-01.png",
      designation: "RMIT PhD Candidate",
    },
    tags: ["Graph", "Cybersecurity", "Neural Network"],
    href: "https://arxiv.org/abs/2501.02796",
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Fine-tuned large language models into traditional back-end web architectures",
    paragraph:
      "A novel approach using a fine-tuned LLama3 model as a modular back-end component capable of processing JSON-formatted inputs and outputs.",
    image: "/images/academicpublish/pub-02.jpg",
    author: {
      name: "Chuan Zhang",
      image: "/images/academicpublish/author-02.png",
      designation: "Senior Software Engineer",
    },
    tags: [ "Fine-tuning","AI","LLM" ],
    href: "http://dx.doi.org/10.54517/cte3168",
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Automated leaderboard system for hackathon evaluation using large language models",
    paragraph:
      "A novel hybrid evaluation framework that leverages large language models (LLMs) and a weighted scoring mechanism to address automated grading systems's bias.",
    image: "/images/academicpublish/pub-03.jpg",
    author: {
      name: "Bowen",
      image: "/images/academicpublish/author-03.png",
      designation: "RMIT Casual Researcher",
    },
    tags: ["Evaluation","AI", "Hackathon", "LLM"],
    href: "http://dx.doi.org/10.54517/cte3166",
    publishDate: "2025",
  },
];
export default blogData;
