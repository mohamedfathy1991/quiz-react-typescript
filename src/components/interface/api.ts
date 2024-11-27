export interface Welcome {
    response_code: number;
    results:       Result[];
}

export interface Result {
    type:              Type;
    difficulty:        Difficulty;
    category:          string;
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
}

export enum Difficulty {
    Easy = "easy",
}

export enum Type {
    Multiple = "multiple",
}
