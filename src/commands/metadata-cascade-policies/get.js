'use strict';

const BoxCommand = require('../../box-command');

class MetadataCascadePoliciesGetCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(MetadataCascadePoliciesGetCommand);

		let policy = await this.client.metadata.getCascadePolicy(args.id);
		await this.output(policy);
	}
}

MetadataCascadePoliciesGetCommand.description = 'Get information about a metadata cascade policy';
MetadataCascadePoliciesGetCommand.examples = [
	'box metadata-cascade-policies:get 12345'
];
MetadataCascadePoliciesGetCommand._endpoint = 'get_metadata_cascade_policies_id';

MetadataCascadePoliciesGetCommand.flags = {
	...BoxCommand.flags
};

MetadataCascadePoliciesGetCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'The ID of the cascade policy to get',
	}
];

module.exports = MetadataCascadePoliciesGetCommand;
