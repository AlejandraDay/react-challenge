import axios, { AxiosResponse } from 'axios';
import { ApiResponse, UserData, PostResponse } from './interface';

export const getData = async (): Promise<any> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get('https://reqres.in/api/unknown');
    return response.data.data; // Retorna solo la propiedad "data"
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};

export const postData = async (userData: UserData): Promise<PostResponse> => {
  try {
    const response: AxiosResponse<PostResponse> = await axios.post('https://reqres.in/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};


