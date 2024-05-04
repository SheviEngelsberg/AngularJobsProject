
import { JobFields } from "./jobFields"

export interface Job {
    jobField: JobFields;
    name: string;
    scopeOfHours: number;
    area: string;
    requirements: string;
    workingFromHome: boolean;
}
