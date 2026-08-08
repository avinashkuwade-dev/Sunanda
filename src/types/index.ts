export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  area: string;
  year: string;
  services: string[];
  systems: string[];
  image: string;
  status: 'completed' | 'ongoing';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image?: string;
}

export interface Client {
  name: string;
  logo: string;
  category: string;
}
