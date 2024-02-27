export type RootStackParamList = {
  Welcome?: any;
  Gallery?: any;
  Photo?: any;
};

export type ImageType = {
  id: string;
  color: string;
  description?: string;
  urls: {
    full: string;
    regular: string;
    thumb: string;
    small: string;
  };
  likes: number;
  user: {
    id: string;
    name: string;
    portfolio_url?: string;
    bio?: string;
    profile_image: {
      medium: string;
    };
  };
};
