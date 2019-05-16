import axios from "axios";
import { IEvent, IRestOptions } from "compensio-common";
import { IEventSender } from "../../contracts/eventSender";


export class RestSender implements IEventSender{

    public send = async (options: IRestOptions, event: IEvent) => {
        const data = await axios.post(options.url, event);
        return data;
    };

}