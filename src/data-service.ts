import axios from "axios";
import { IData } from "./entities";

export async function fetchAllData(){
    const response = await axios.get<IData[]>('http://localhost:8000/api/data');
    return response.data;

}


export async function addData(data:IData) {
    try {
        const response = await axios.post<IData>('https://localhost:8000/api/data', data);
        return response.data;
    } catch (error) {
    
        console.log(error);
      
    }
   
}




