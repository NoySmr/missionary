export class MSError extends Error {
	type: 'MSError' = 'MSError';

	constructor(
		public name: string,
		public statusCode: number,
		public message: string
	) { super(message); }
}

export class NotFoundError extends MSError {
	constructor(desiredResource: string) {
		super(
			`NotFoundError`,
			404,
			`The resource '${desiredResource}' cannot be found`
		);
	}
}

export class MissingArgumentError extends MSError {
	constructor(public argumentName: string) {
		super(
			`MissingArgumentError`,
			460,
			`The argument '${argumentName}' is missing.`
		);
	}
}

export class InvalidArgumentError extends MSError {
	constructor(public argumentName: string, public argumentValue: string) {
		super(
			`InvalidArgumentError`,
			461,
			`The argument '${argumentName}' with value '${argumentValue}' is invalid.`
		)
	}
}

export class GeneralError extends MSError {
	public static fromError(error: Error | string): GeneralError {
		if (error instanceof Error) {
			return (new GeneralError(error.message));
		} else if (typeof error === 'string') {
			return new GeneralError(error);
		} else {
			return new GeneralError('An unknown error occured');
		}
	}

	constructor(message: string) {
		super(`UnknownError`, 500, message)
	}
}

export class ActionFailedError extends MSError {
	constructor(actionName: string) {
		super(
			`ActionFailedError`,
			550,
			`The action '${actionName}' couldn't be performed successfully, try again.`
		)
	}
}