export interface ITask {
    id: number;
    title: string;
    priority: number;
    status: boolean;
    deadline?: string;
}

export const TASKS: ITask[] = [
    {
        id: 10,
        title: "Hit the gym",
        deadline: "01.04.2023",
        status: false,
        priority: 0
    },
    {
        id: 2,
        title: "Pay bills",
        deadline: "29.03.2023",
        status: true,
        priority: 1
    },
    {
        id: 3,
        title: "Buy eggs",
        deadline: "29.03.2023",
        status: false,
        priority: 1
    },
    {
        id: 4,
        title: "Meet John",
        status: false,
        priority: 0
    },
    {
        id: 5,
        title: "Read a book",
        status: true,
        priority: 0
    },
    {
        id: 6,
        title: "Organize office",
        status: false,
        priority: 0
    },
    {
        id: 7,
        title: "Eat dinner",
        status: false,
        priority: 0
    },
    {
        id: 8,
        title: "Buy apples",
        deadline: "05.03.2023",
        status: false,
        priority: 1
    }
]