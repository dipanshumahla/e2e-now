# E2E Now

E2ENow is an end-to-end testing library made to get feedback from developers from around the world.

## Features

- Simple
- Easy to learn/understand

Create an issue to point out bad practices, improvements or any changes that you may think could improve this "library".


## Installation

```sh
npm i --save-dev e2e-now
```

## Usage

```typescript
import E2ENow from 'e2e-now';

const e2e = E2ENow.create({
    url: "https://jsonplaceholder.typicode.com",
    basePath: "/",
    modules: [
        <module-list>,
    ]
});

e2e.exec();
```

### Modules

You need to created modules for each url. To create a simple module just do:

``` typescript
import {TestModule} from 'e2e-now';
const moduleName = TestModule.create('/<base-url-to-test>');

moduleName.test('/<current-url-to-test>', 'get', [
    <test-list>,
]);
```

### Tests

Tests are used to test different test cases for same url, like for authentication url there might be cases where user enter wrong id or password.

``` typescript
const todosUpdateTest = todosModule
    .createTest('Updating a todo')
    .request({
        body: {
            title: 'test',
            completed: true
        },
        query: {
            id: 1,
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
```

## Development

Want to contribute? Great!

Create an issue to point out bad practices, improvements or any changes that you may think could improve this "library".

## License

MIT

**Free Software, Hell Yeah!**
