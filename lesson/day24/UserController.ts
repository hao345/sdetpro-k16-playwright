import { ValidationError } from "./AppError";

export function createUser(userName: string) {
    if (!userName) {
        throw new ValidationError(`Username is required`)
        return {
            userName
        }
    }
}