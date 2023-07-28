
export interface UserData {
  name: string;
  job: string;
}

export interface PostResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}


export interface ColorData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ColorData[];
  support: {
    url: string;
    text: string;
  };
}