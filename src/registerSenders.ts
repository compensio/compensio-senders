import { SenderProviderType } from "compensio-common";
import { SenderFactory } from "./providers/factory";
import { RestSender } from "./providers/rest/rest";

export function registerSenders() {
    SenderFactory.register(SenderProviderType.REST, new RestSender());
}