interface IService {
    done: boolean;
    serviceText?: string;
}

export interface IRate {
    title: string;
    price: number;
    workTime: string;
    reactionTime: string;
    services: IService[];
    hourFromAbove: number;
    listTitle?: string;
}