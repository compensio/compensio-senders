import { IEvent } from "compensio-common";


export interface IEventSender {
    send: (options: any, event: IEvent) => void;
}