export interface StaticPage {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  meta_description: string;
  is_active: number;
  added_by: {
    id: number;
    name: string;
  };
  created_at: string;
}
