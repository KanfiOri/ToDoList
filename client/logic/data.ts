import { task } from '../entites/interfaces'

const data: task[] = [
    {
        id: 1,
        taskName: "learn to pub+ interview",
        deadLine: new Date('2023-12-10'),
        finished: false
    },
    {
        id: 2,
        taskName: "learn react",
        deadLine: new Date("2023-12-29"),
        finished: true
    },
    {
        id: 3,
        taskName: "Feed dodi with panckae",
        deadLine: new Date("2024-01-18"),
        finished: false
    },
    {
        id: 4,
        taskName: "Feed Dodi with marshmelo",
        deadLine: new Date("2024-01-05"),
        finished: true
    }
]

export default data