export interface IQueueOptions {
    name: string;
    credentials: any;
}

export interface IQueue {
    push(item: any);
    pop(): any;
    peek(): any;
    clear();
}