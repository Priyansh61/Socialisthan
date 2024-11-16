export interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
  }
  
  export interface Project {
    category: string;
    title: string;
    image: string;
    link: string;
  }
  
  export interface BlogPost {
    date: string;
    title: string;
    image: string;
    link: string;
  }
  
  export interface Testimonial {
    content: string;
    author: string;
    role: string;
    company: string;
  }