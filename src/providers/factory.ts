import { SenderProviderType } from "common";
import { IEventSender } from "../contracts/eventSender";

export class SenderFactory {
    public static getSender(provider: SenderProviderType): IEventSender {
        const sender = SenderFactory.registry.get(provider);
        if(!sender) {
            throw new Error("Don't have that transformer");
        }
        return sender;
    }

    public static register(providerType: SenderProviderType, sender: IEventSender) {
        if (!SenderFactory.registry) {
            SenderFactory.registry = new Map<SenderProviderType, IEventSender>();
        }
        SenderFactory.registry.set(providerType, sender);
    }

    private static registry: Map<SenderProviderType, IEventSender>;
}