import { InMemoryChallengesRepository } from "../../../tests/repositories/InMemoryChallengeRepository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/InMemoryStudentsRepository";
import { Challenge } from "../../domain/entities/Challenge";
import { Student } from "../../domain/entities/Student";
import { CreateChallangeSubmissionUseCase } from "./CreateChallengeSubmissionUseCase";

describe('Create challenge submission', () => {

    it('Should be able to create a new challenge submission', async () => {
        const inMemoryStudentsRepository: InMemoryStudentsRepository = new InMemoryStudentsRepository();
        const inMemoryChallengeRepository: InMemoryChallengesRepository = new InMemoryChallengesRepository();

        const createChallengeSubmission = new CreateChallangeSubmissionUseCase(inMemoryStudentsRepository, inMemoryChallengeRepository);

        const student: Student = Student.create({
            name: 'Student',
            email: 'pedrohmartinss@hotmail.com'
        });

        const challenge: Challenge = Challenge.create({
            title: 'Challenge Title',
            instructionUrl: 'http://localhost:8080'
        });

        inMemoryStudentsRepository.items.push(student);
        inMemoryChallengeRepository.items.push(challenge);

        const response = await createChallengeSubmission.execute({
            studentId: student.id,
            challengeId: challenge.id
        });

        expect(response).toBeTruthy();
    });

});