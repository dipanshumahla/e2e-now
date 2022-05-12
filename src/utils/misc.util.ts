export function compareObjects(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false;
    }
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            return false;
        }

        if(typeof obj2[key] === 'object') {
            const nestedObject = obj2[key];
            if(!compareObjects(obj1[key], nestedObject)) {
                return false;
            }
        } else {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
}
