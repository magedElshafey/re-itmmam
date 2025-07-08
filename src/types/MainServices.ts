export interface MainServices {
  id: number;
  name: string;
  parent_id: string;
  description: string;
  images: string[];
  video: string;
  is_active: string;
  created_at: string;
  added_by: {
    id: number;
    name: string;
  };
}
