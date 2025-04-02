export interface Rocket {
    rocket_name: string;
    rocket_type: string;
  }
  
  export interface Links {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  }
  
  export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    links: {
      mission_patch_small: string;
      mission_patch: string;
    };
    launch_site: {
      site_name_long: string;
    };
  }
  