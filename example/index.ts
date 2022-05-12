import { E2ENow } from "../src";
import todosModule from "./todos";


const es = E2ENow.create({
    url: "https://jsonplaceholder.typicode.com",
    basePath: "/sdf",
    modules: [
        todosModule,
    ]
});


es.exec();