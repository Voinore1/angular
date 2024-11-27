export interface ITask {
    id: number;
    todo: string;
    priority?: number;
    completed: boolean;
    deadline?: Date;
}

export const TASKS: ITask[] = [
    {
        id: 10,
        todo: "Hit the gym",
        deadline: new Date("01.01.2001"),
        completed: false,
        priority: 0
    },
    {
        id: 2,
        todo: "Pay bills",
        deadline: new Date("01.01.2001"),
        completed: true,
        priority: 1
    },
    {
        id: 3,
        todo: "Buy eggs",
        deadline: new Date("01.01.2001"),
        completed: false,
        priority: 1
    },
    {
        id: 4,
        todo: "Meet John",
        deadline: new Date("01.01.2001"),
        completed: false,
        priority: 0
    },
    {
        id: 5,
        todo: "Read a book",
        completed: true,
        deadline: new Date("01.01.2001"),
        priority: 0
    },
    {
        id: 6,
        todo: "Organize office",
        completed: false,
        deadline: new Date("01.01.2001"),
        priority: 0
    },
    {
        id: 7,
        todo: "Eat dinner",
        deadline: new Date("01.01.2001"),
        completed: false,
        priority: 0
    },
    {
        id: 8,
        todo: "Buy apples",
        deadline: new Date("01.01.2001"),
        completed: false,
        priority: 1
    }
]