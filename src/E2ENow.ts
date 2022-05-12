import { TestModule } from "./TestModule";
import Logger from "./utils/log.util";
import * as urls from './utils/url.util';

export interface IE2ENowOptions {
    url: string;
    basePath: string;
    modules: TestModule[];
}

export class E2ENow {

    url: IE2ENowOptions['url'];
    basePath: IE2ENowOptions['basePath'];
    modules: IE2ENowOptions['modules'] = [];

    constructor(e2eoptions: IE2ENowOptions) {
        this.url = e2eoptions.url;
        this.basePath = e2eoptions.basePath;
        this.modules = e2eoptions.modules;
    }

    static create(e2eoptions: IE2ENowOptions): E2ENow {
        return new E2ENow(e2eoptions);
    }

    exec(): void {

        Logger.log('E2E Now start...');
        this.modules.forEach((module) => {
            module.exec(urls.join(this.url, this.basePath));
        });
    }
}