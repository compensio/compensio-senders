import { IEvent, RestOptions, SenderProviderType } from "compensio-common";
import { SenderFactory } from "./providers/factory";


export class Sender {
    public static send(
                    providerType: SenderProviderType,
                    options: RestOptions,
                    event: IEvent): Promise<any> {
        const sender = SenderFactory.getSender(providerType);
        return sender.send(options, event);
    }
}