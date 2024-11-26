export interface ITask {
    id: number;
    title: string;
    priority: number;
    status: boolean;
    deadline?: Date;
}

export const TASKS: ITask[] = [
    {
        id: 10,
        title: "Hit the gym",
        deadline: new Date("01.01.2001"),
        status: false,
        priority: 0
    },
    {
        id: 2,
        title: "Pay bills",
        deadline: new Date("01.01.2001"),
        status: true,
        priority: 1
    },
    {
        id: 3,
        title: "Buy eggs",
        deadline: new Date("01.01.2001"),
        status: false,
        priority: 1
    },
    {
        id: 4,
        title: "Meet John",
        deadline: new Date("01.01.2001"),
        status: false,
        priority: 0
    },
    {
        id: 5,
        title: "Read a book",
        status: true,
        deadline: new Date("01.01.2001"),
        priority: 0
    },
    {
        id: 6,
        title: "Organize office",
        status: false,
        deadline: new Date("01.01.2001"),
        priority: 0
    },
    {
        id: 7,
        title: "Eat dinner",
        deadline: new Date("01.01.2001"),
        status: false,
        priority: 0
    },
    {
        id: 8,
        title: "Buy apples",
        deadline: new Date("01.01.2001"),
        status: false,
        priority: 1
    }
]