import { Submission } from "../../domain/entities/Submission";
import { IChallengeRepository } from "../repositories/IChallengesRepository";
import { IStudentsRepository } from "../repositories/IStudentsRepository";

type CreateChallangeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

class CreateChallangeSubmissionUseCase {

    constructor(
        private studentsRepository: IStudentsRepository,
        private challengesRepository: IChallengeRepository
    ) { }

    async execute({ studentId, challengeId }: CreateChallangeSubmissionRequest) {
        const student = await this.studentsRepository.findById(studentId);
        const challenge = await this.challengesRepository.findById(challengeId);

        if (!student) {
            throw new Error('Student does not exists.');
        }

        if (!challenge) {
            throw new Error('Challenge does not exists.');
        }

        const submission = Submission.create({
            studentId,
            challengeId
        });

        return submission;
    }
}

export { CreateChallangeSubmissionUseCase };