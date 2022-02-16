import { Challenge } from "../../domain/entities/Challenge";


export interface IChallengeRepository {

    findById(id: string): Promise<Challenge | null>;

}