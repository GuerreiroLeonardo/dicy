import { Either } from "../../shared/either";

export interface UserData {
    email: string;
    firstName: string;
    lastName: string;
}

export class User {
    private readonly email: string;
    private readonly firstName: string;
    private readonly lastName: string;

    private constructor(userData: UserData) {
        this.email = userData.email;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
    }

    getEmail() {
        return this.email;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static create(userData: UserData): Either<Error, User> {
		
		return right(new User())
	}
}
