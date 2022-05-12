import { TestModule } from "../src/TestModule";

const todosModule = TestModule.create('/todos');

const todosUpdateTest = todosModule
    .createTest('Updating a todo')
    .request({
        body: {
            title: 'test',
            completed: true
        },
        query: {
            id: 1,
            name: 'dipanshu'
        },
        params: {
            id: 1
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .response({
        status: 200,
        body: {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false
        },
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    });


todosModule.test('/{id}', 'get', [
    todosUpdateTest,
    todosUpdateTest,
    todosUpdateTest,
]);

export default todosModule;