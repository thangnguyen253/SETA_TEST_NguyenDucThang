describe('Test Sum On Top Two', function () {
  it('[1,4,2,3,5]', function () {
    expected = 9;

    array = [1, 4, 2, 3, 5];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('Array with one element', function () {
    expected = 'Array must have at least 2 elements!';

    array = [1];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('Empty array', function () {
    expected = 'Array must have at least 2 elements!';

    array = [];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('Empty input', function () {
    expected = 'Not an array!';

    array = '';
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('[4,1,2,3,5,5]', function () {
    expected = 10;

    array = [1, 1, 2, 3, 5, 5];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('[4,3,2,4,5]', function () {
    expected = 9;

    array = [1, 3, 4, 4, 5];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });

  it('[6,2,5,7,6,7]', function () {
    expected = 14;

    array = [1, 2, 6, 7, 6, 7];
    actual = SumOnTopTwo(array);

    expect(expected).toBe(actual);
  });
});
