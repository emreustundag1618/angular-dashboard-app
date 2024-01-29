export interface Single {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string}[];
        data: object[];
    };
    activities?: {time: string; text: string}[]
}