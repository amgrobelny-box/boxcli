'use strict';

const BoxCommand = require('../../box-command');
const { flags } = require('@oclif/command');

class FoldersListItemsCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(FoldersListItemsCommand);
		let options = {
			usemarker: true,
		};

		if (flags.direction) {
			options.direction = flags.direction;
		}
		if (flags.sort) {
			options.sort = flags.sort;
		}

		let items = await this.client.folders.getItems(args.id, options);
		await this.output(items);
	}
}

FoldersListItemsCommand.aliases = [ 'folders:list-items' ];

FoldersListItemsCommand.description = 'List items in a folder';

FoldersListItemsCommand.flags = {
	...BoxCommand.flags,
	direction: flags.string({
		description: 'The direction to order returned items',
		options: [
			'ASC',
			'DESC'
		]
	}),
	sort: flags.string({
		description: 'The parameter to sort returned items',
		options: [
			'id',
			'name',
			'date'
		]
	}),
};

FoldersListItemsCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the folder to get the items in, use 0 for the root folder',
	}
];

module.exports = FoldersListItemsCommand;
