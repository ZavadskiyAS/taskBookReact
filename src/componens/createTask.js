import { uuid } from "uuidv4";

export default function createTask() {
    return {
        id: uuid(),
        text: lorem.generateSentences(5),
        comleted: false,
    };
}