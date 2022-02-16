import { IStudentsRepository } from "../../src/application/repositories/IStudentsRepository";
import { Student } from "../../src/domain/entities/Student";

export class InMemoryStudentsRepository implements IStudentsRepository {

    public items: Student[] = [];

    async findById(id: string): Promise<Student | null> {
        const student = this.items.find(student => student.id === id);

        if (!student) return null;

        return student;
    }
}