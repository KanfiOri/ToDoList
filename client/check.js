const data = [
    {
        id: 1,
        taskName: "learn to pub+ interview",
        deadLine: new Date('2023-12-10'),
    },
    {
        id: 2,
        taskName: "learn react",
        deadLine: new Date("2023-12-29")
    },
    {
        id: 3,
        taskName: "Feed dodi with panckae",
        deadLine: new Date("2024-01-18")
    },
    {
        id: 4,
        taskName: "Feed Dodi with marshmelo",
        deadLine: new Date("2024-01-05")
    }
]

const funcDo = (id, taskName) => {
    const updatedData = data.map(item => {
        if (item.id === id) {
            return {
                ...item,
                taskName: taskName
            };
        }
        return item;
    });
    console.log(updatedData)
}


funcDo(1, "doidodidodidi")