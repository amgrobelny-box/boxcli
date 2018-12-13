'use strict';

const BoxCommand = require('../../../box-command');

class LegalHoldPoliciesGetVersionHoldCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(LegalHoldPoliciesGetVersionHoldCommand);

		let fileVersionHold = await this.client.legalHoldPolicies.getFileVersionLegalHold(args.id);
		await this.output(fileVersionHold);
	}
}

LegalHoldPoliciesGetVersionHoldCommand.description = 'Get information about a file version legal hold';

LegalHoldPoliciesGetVersionHoldCommand.flags = {
	...BoxCommand.flags
};

LegalHoldPoliciesGetVersionHoldCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the file version legal hold to get',
	}
];

module.exports = LegalHoldPoliciesGetVersionHoldCommand;
