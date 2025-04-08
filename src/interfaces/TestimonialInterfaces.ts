export enum TestimonialCategory {
  ATHLETE = 'ATHLETE',
  COACH = 'COACH',
  PARENT = 'PARENT',
}

export enum TestimonialType {
  TEXT = 'TEXT',
  VIDEO = 'VIDEO'
}

export interface Testimonial {
  authorName: string;
  authorRole: TestimonialCategory;
  testimonialType: TestimonialType;
  content: string;
  position: string;
  rating?: number;
  isFeatured?: boolean;
  isApproved?: boolean;
  showOnHome?: boolean;
  showOnTestimonials?: boolean;
  userId?: number;
  eventId?: number;
  mediaId?: number;
  media?: any;
}

export interface TestimonialResponse extends Testimonial {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
