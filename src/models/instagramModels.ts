export interface Profile {
    _id: string;
    id: string;
    username: string;
    media_count: string;
    followers_count: number;
    follows_count: number;
    biography: string;
    website: string;
    profile_picture_url:string;
  }
  


    export interface MainContent {
    data: ContentModel[];
    paging?: {
        cursors: {
        before: string;
        after: string;
        };
    };
    }


  export interface ContentModel {
    _id: string;
    id: string;
    caption: string;
    media_type: string;
    media_url: string; 
    permalink: string; 
  }
  
  export interface InstagramModel {
    _id: string;
    profile: Profile; 
    content: MainContent[];
    createAt: number;
    creatorId: string;
  }
  