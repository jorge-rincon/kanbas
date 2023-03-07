import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: "📋por hacer",
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar React Native"
            },
            {
                id: uuidv4(),
                title: "Estudiar Ingles"
            },
        ]


    },
    {
        id: uuidv4(),
        title: "🛠 En progreso",
        tasks: [
            {
                id: uuidv4(),
                title: "Curso React avanzado"
            },
            {
                id: uuidv4(),
                title: "Desarrollar mi portfolio"
            },
        ]


    },
    {
        id: uuidv4(),
        title: "✔️ Tarea cumplida",
        tasks: [
            {
                id: uuidv4(),
                title: "Primer proyecto React"
            },
            {
                id: uuidv4(),
                title: "Diseñar mi portfolio"
            },
            {
                id: uuidv4(),
                title: "Curso basico de React"
            },
        ]


    },
];

export default mockData