type Author = {
  name: string;
  image: string;
  designation: string;
};

export type AcademicPublish = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  href: string;
  publishDate: string;
};
