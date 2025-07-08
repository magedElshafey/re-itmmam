export interface List {
  id: number;
  name: string;
  year: string;
  icon: string;
  file: string;
  added_by: {
    id: number;
    name: string;
  };
}
