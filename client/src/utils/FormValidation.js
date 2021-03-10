export default class FormValidation {
    constructor(object) {
        this.object = object;
        this.objectKeys = Object.keys(keys);
        return new Promise((resolve, reject) => {
            this.objectKeys.forEach((key, index) => {
                if (this.object[key] == null) resolve( { status: false, object: key });
                else reject( { status: true, object: null });
            });
        })
    }
};