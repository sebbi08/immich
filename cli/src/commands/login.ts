import { BaseCommand } from './base-command';

export class LoginCommand extends BaseCommand {
  public async run(instanceUrl: string, apiKey: string): Promise<void> {
    if (!instanceUrl) {
      throw new Error('instanceUrl is required.');
    }

    // HACK: Strip trailing slashes, because they break things. Should probably just handle them well instead.
    instanceUrl = instanceUrl.replace(/\/$/, '');
    await this.sessionService.login(instanceUrl, apiKey);
  }
}
