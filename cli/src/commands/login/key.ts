import { BaseCommand } from '../../cli/base-command';

export class LoginKey extends BaseCommand {
  public async run(instanceUrl: string, apiKey: string): Promise<void> {
    if (!instanceUrl) {
      throw new Error("instanceUrl is required.")
    }
    
    console.log('Executing API key auth flow...');

    await this.sessionService.keyLogin(instanceUrl, apiKey);
  }
}
