import { JobFields } from "./jobFields";


export interface User {
    id: number;
    userName: string;
    password: string;
    jobSearchField: JobFields; 
}
