import { BaseCommand } from '../../cli/base-command';

export class LoginKey extends BaseCommand {
  public async run(instanceUrl: string, apiKey: string): Promise<void> {
    if (!instanceUrl) {
      throw new Error("instanceUrl is required.")
    }
    
    console.log('Executing API key auth flow...');

    // HACK: Strip trailing slashes, because they break things. Should probably just handle them well instead.
    instanceUrl = instanceUrl.replace(/\/$/, "");

    await this.sessionService.keyLogin(instanceUrl, apiKey);
  }
}
