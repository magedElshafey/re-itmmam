export interface HeroHome {
    id: number, 
    name: string, 
    description: string, 
    sub_description: string, 
    image: string, 
    video: string 
    is_active: string;  
    added_by: {
        id: number, 
        name : string
    }
}