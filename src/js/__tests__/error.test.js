import ErrorRepository from '../error-repository';

test.each([
    { data: 1, expected: 'TypeError' },
    { data: 2, expected: 'RangeError' },
    { data: 3, expected: 'EvalError' },
    { data: 4, expected: 'Unknown error' },
])('correct work translate function', ({ data, expected }) => {
    const error = new ErrorRepository();
    expect(error.translate(data)).toEqual(expected);
});
