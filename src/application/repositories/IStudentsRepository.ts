import { Student } from "../../domain/entities/Student";


export interface IStudentsRepository {

    findById(id: string): Promise<Student | null>;

}