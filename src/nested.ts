import { QuestionDotToken } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (ques: Question): boolean => ques.published === true
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    questions.filter(
        (ques: Question): boolean =>
            ques.body !== "" ||
            ques.expected !== "" ||
            ques.options.length !== 0
    );
    return questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    let q = null;
    questions.map((ques) => {
        if (ques.id === id) {
            q = ques;
        }
    });
    return q;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let q: Question[] = [];
    questions.map((ques) => {
        if (ques.id !== id) {
            q = [...q, ques];
        }
    });
    return q;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let s: string[] = [];
    questions.map((ques) => {
        s = [...s, ques.name];
    });
    return s;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let p = 0;
    questions.map((ques) => {
        p += ques.points;
    });
    return p;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let t = 0;
    questions.map((ques) => {
        if (ques.published) {
            t += ques.points;
        }
    });
    return t;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let i = 0;
    let s = "id,name,options,points,published\n";
    questions.map((ques) => {
        i++;
        s +=
            ques.id +
            "," +
            ques.name +
            "," +
            ques.options.length.toString() +
            "," +
            ques.points.toString() +
            ",";
        if (i !== questions.length) {
            if (ques.published) {
                s += "true\n";
            } else {
                s += "false\n";
            }
        } else {
            if (ques.published) {
                s += "true";
            } else {
                s += "false";
            }
        }
    });
    console.log(s);
    return s;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let a: Answer[] = [];
    questions.map((ques) => {
        const temp: Answer = {
            questionId: ques.id,
            text: "",
            submitted: false,
            correct: false
        };
        a = [...a, temp];
    });
    return a;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let n: Question[] = [];
    questions.map((ques) => {
        const temp = {
            body: ques.body,
            expected: ques.expected,
            id: ques.id,
            name: ques.name,
            options: ques.options,
            points: ques.points,
            published: true,
            type: ques.type
        };
        temp.published = true;
        n = [...n, temp];
    });
    return n;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const t: string = questions[0].type;
    let b = true;
    questions.map((ques) => {
        if (ques.type != t) {
            b = false;
        }
    });
    return b;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const func = {
        body: "",
        expected: "",
        id: id,
        name: name,
        options: [],
        points: 1,
        published: false,
        type: type
    };
    let a: Question[] = [];
    questions.map((ques) => {
        a = [...a, ques];
    });
    a = [...a, func];
    return a;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    //console.log(questions);
    let b: Question[] = [];
    questions.map((ques) => {
        if (ques.id === targetId) {
            const temp: Question = {
                body: ques.body,
                expected: ques.expected,
                id: ques.id,
                name: newName,
                options: ques.options,
                points: ques.points,
                published: ques.published,
                type: ques.type
            };
            b = [...b, temp];
        } else {
            b = [...b, ques];
        }
    });
    return b;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    let b: Question[] = [];
    questions.map((ques) => {
        if (ques.id === targetId) {
            const temp: Question = {
                body: ques.body,
                expected: ques.expected,
                id: ques.id,
                name: ques.name,
                options: ques.options,
                points: ques.points,
                published: ques.published,
                type: newQuestionType
            };
            if (temp.type !== "multiple_choice_question") {
                temp.options = [];
            }
            b = [...b, temp];
        } else {
            b = [...b, ques];
        }
    });
    console.log(b);
    return b;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let b: Question[] = [];
    console.log(targetId);
    console.log(targetOptionIndex);
    console.log(newOption);
    questions.map((ques) => {
        if (ques.id === targetId) {
            const temp: Question = {
                body: ques.body,
                expected: ques.expected,
                id: ques.id,
                name: ques.name,
                options: ques.options,
                points: ques.points,
                published: ques.published,
                type: ques.type
            };
            if (targetOptionIndex === -1) {
                temp.options = [...temp.options, newOption];
            } else {
                temp.options.splice(targetOptionIndex, 1, newOption);
            }
            b = [...b, temp];
        } else {
            b = [...b, ques];
        }
    });
    console.log(b);
    return b;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return [];
}
