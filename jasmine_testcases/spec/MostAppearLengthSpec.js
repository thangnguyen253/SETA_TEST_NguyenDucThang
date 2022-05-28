describe('Test Most Appear Length', function () {
  it('["ab","ac","adc","abcd","ae"]', function () {
    expected = ['ab', 'ac', 'ae'];

    array = ['ab', 'ac', 'adc', 'abcd', 'ae'];
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });

  it('Empty array', function () {
    expected = 'Array must have at least 1 element!';

    array = [];
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });

  it('Empty input', function () {
    expected = 'Not an array!';

    array = '';
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });

  it('["abc","ac","adcd","abcd","ae"]', function () {
    expected = ['ac', 'ae'];

    array = ['abc', 'ac', 'adcd', 'abcd', 'ae'];
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });

  it('["ab","ac","ad","ae","af"]', function () {
    expected = ['ab', 'ac', 'ad', 'ae', 'af'];

    array = ['ab', 'ac', 'ad', 'ae', 'af'];
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });

  it('["a","ab","abc","abcd","abcde"]', function () {
    expected = ['a'];

    array = ['a', 'ab', 'abc', 'abcd', 'abcde'];
    actual = MostAppearLength(array);

    expect(expected).toEqual(actual);
  });
});
