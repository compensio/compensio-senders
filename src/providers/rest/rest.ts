import axios from "axios";
import { IEvent, RestOptions } from "compensio-common";
import { IEventSender } from "../../contracts/eventSender";


export class RestSender implements IEventSender{

    public send = async (options: RestOptions, event: IEvent) => {
        const data = await axios.post(options.url, event);
        return data;
    };

}