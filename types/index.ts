export interface EventItem {
  id?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  desc: string;
  image: string;
}

export interface OrganItem {
  id?: string;
  name: string;
  element: string;
  emotion: string;
  desc: string;
  img: string;
}

export interface TestimonialItem {
  id?: string;
  quote: string;
  name: string;
  title?: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
