export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "current" | "past";
}

export interface Skill {
  name: string;
  level: number;
  category: "programming" | "technical" | "other";
}

export interface ContactInfo {
  email: string;
  discord: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  category: "one-time" | "monthly";
  popular?: boolean;
}

export interface ServicePackage {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  services: string[];
  duration: "monthly" | "one-time";
  popular?: boolean;
}
