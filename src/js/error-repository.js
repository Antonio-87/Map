export default class ErrorRepository {
    constructor() {
        this.members = new Map();
        this.members.set(1, 'TypeError');
        this.members.set(2, 'RangeError');
        this.members.set(3, 'EvalError');
    }

    translate(code) {
        return this.members.has(code) ? this.members.get(code) : 'Unknown error';
    }
}
