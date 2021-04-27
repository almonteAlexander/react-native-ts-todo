export interface ITodo{
    id: number;
    title: string;
    description: string;
    changeTitle: (newTitle: string) => void;
    changeDescription: (newDescription: string) => void;
}