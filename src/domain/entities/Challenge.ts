import { Entity } from "../../core/domain/Entity";

type ChallangeProps = {
    title: string;
    instructionUrl: string;
};

class Challenge extends Entity<ChallangeProps> {

    private constructor(props: ChallangeProps, id?: string) {
        super(props, id);
    }

    static create(props: ChallangeProps, id?: string) {
        const challenge = new Challenge(props, id);

        return challenge;
    }
}

export { Challenge };