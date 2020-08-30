import { injectable } from 'inversify';

export interface IMissionsDAL {
	ok(): boolean;
}

@injectable()
export class MissionsDAL implements IMissionsDAL {
	public ok(): boolean {
		return true;
	}
}