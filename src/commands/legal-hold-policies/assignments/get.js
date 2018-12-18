'use strict';

const BoxCommand = require('../../../box-command');

class LegalHoldPoliciesGetAssignmentCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(LegalHoldPoliciesGetAssignmentCommand);
		let options = {};

		if (flags.fields) {
			options.fields = flags.fields;
		}

		let assignment = await this.client.legalHoldPolicies.getAssignment(args.id, options);
		await this.output(assignment);
	}
}

LegalHoldPoliciesGetAssignmentCommand.description = 'Get information about a policy assignment';

LegalHoldPoliciesGetAssignmentCommand.flags = {
	...BoxCommand.flags
};

LegalHoldPoliciesGetAssignmentCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the policy assignment to get',
	}
];

module.exports = LegalHoldPoliciesGetAssignmentCommand;
