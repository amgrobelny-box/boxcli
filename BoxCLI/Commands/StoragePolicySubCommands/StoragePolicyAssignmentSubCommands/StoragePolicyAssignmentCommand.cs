﻿using System.Threading.Tasks;
using BoxCLI.BoxHome;
using BoxCLI.BoxPlatform.Service;
using BoxCLI.CommandUtilities.Globalization;
using Microsoft.Extensions.CommandLineUtils;

namespace BoxCLI.Commands.StoragePolicySubCommands.StoragePolicyAssignmentSubCommands
{
    public class StoragePolicyAssignmentCommand : BoxBaseCommand
    {
        private readonly ISubCommandFactory _subCommands;
        public StoragePolicyAssignmentCommand(IBoxPlatformServiceBuilder boxPlatformBuilder, IBoxHome boxHome, LocalizedStringsResource names, SubCommandFactory factory)
            : base(boxPlatformBuilder, boxHome, names)
        {
            _subCommands = factory.CreateFactory(_names.CommandNames.StoragePolicyAssignment);
        }

        private CommandLineApplication _app;

        public override void Configure(CommandLineApplication command)
        {
            _app = command;
            command.Description = "Work with storage policy assignments in Box.";
            command.ExtendedHelpText = "You can use this command to create, update, delete, and get information about storage policy assignments in your Enterprise.";
            command.Command(_names.SubCommandNames.Get, _subCommands.CreateSubCommand(_names.SubCommandNames.Get).Configure);
            command.Command(_names.SubCommandNames.Add, _subCommands.CreateSubCommand(_names.SubCommandNames.Add).Configure);
            command.Command(_names.SubCommandNames.Update, _subCommands.CreateSubCommand(_names.SubCommandNames.Update).Configure);
            command.Command(_names.SubCommandNames.Remove, _subCommands.CreateSubCommand(_names.SubCommandNames.Remove).Configure);
            command.Command(_names.SubCommandNames.Lookup, _subCommands.CreateSubCommand(_names.SubCommandNames.Lookup).Configure);
            command.OnExecute(async () =>
               {
                   return await this.Execute();
               });
            base.Configure(command);
        }

        protected async override Task<int> Execute()
        {
            _app.ShowHelp();
            return await base.Execute();
        }
    }
}