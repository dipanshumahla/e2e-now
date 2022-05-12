import https from 'https';
import { ITestRequestOptions } from '../Test';

class Http {
    static async get(url: string, request: ITestRequestOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
                res.on('error', (err) => {
                    reject(err);
                });
            });
        });
    }
}

export default Http;