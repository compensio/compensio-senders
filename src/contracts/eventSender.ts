import { IEvent } from "common";


export interface IEventSender {
    send: (options: any, event: IEvent) => void;
}