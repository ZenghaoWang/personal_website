/// <reference types="next" />
/// <reference types="next/types/global" />

// Blog Post Metadata
type PostMetadata = {
  slug: string;
  title: string;
  isPublished: boolean;
  isPinned: boolean;
  date: string;
  description: string;
};
