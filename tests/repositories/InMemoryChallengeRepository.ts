import { IChallengeRepository } from "../../src/application/repositories/IChallengesRepository";
import { Challenge } from "../../src/domain/entities/Challenge";

export class InMemoryChallengesRepository implements IChallengeRepository {

    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
        const challenge = this.items.find(challenge => challenge.id === id);

        if (!challenge) return null;

        return challenge;
    }
}