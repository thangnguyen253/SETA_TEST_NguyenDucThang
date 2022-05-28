# 1.Folder structure

## jasmine_testcases

- includes source code of `Test I` and its test cases
- Using jasmine library to write test cases
- /lib: contains jasmine library
- /spec: contains test cases: MostAppearLengthSpec is for `Test I.1` and SumOnTopTwoSpec is for `Test I.2`
- /src: contains source code: MostAppearLength is for `Test I.1` and SumOnTopTwo is for `Test I.2`
- index.html: run this file to see the test cases' results

## post-management

- includes source code of `Test II`
- Using react-bootstrap for UI
- /actions: contains action files of redux
- /components: contains components: Paginating for pagination and PostForm for adding new post
- /pages: contains pages of this application
- /reducers: contains reducer files of redux
- store.js: create store redux

# 2.Specification

## `Test I.1`

### Question: Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to find the strings’ length that appear most in this array. Writing the unit test function and provide some test-cases.The result for example array is [‘ab’, ‘cd’, ‘gh’].

### Solution: Divided this question into smaller questions: find length of each element in array, then find which length has max times appearance

`Note`: Because the question does not mention the result if there are more than one strings' length appearing most (such as ['a', 'b', 'ab', 'ac']), so this solution only returns elements that have first strings' length appearing most. (for example, array is ['a', 'b', 'ab', 'ac'], output is ['a', 'b']). Moreover, empty array input or none array input is not accepted.

### Time Complexity: best case: O(n\*log(n)), worst case: O(n^2) (due to TimSort algorithm)

### Usage: run the index.html file in jasmine_testcases, look for the test named "Test Most Appear Length" to see its test cases.

## `Test I.2`

### Question: Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of integers on top 2. Writing the unit test function and provide some test-cases. The result for the example array is 9.

### Solution: Suppose first and second element is topOne and topTwo (topOne >= topTwo), then find actual topOne and topTwo.

`Note`: Due to not being mentioned, array with less than 2 elements or none array is not an acceptable input.

### Time Complexity: O(n)

### Usage: run the index.html file in jasmine_testcases, look for the test named "Test Sum On Top Two" to see its test cases.

## `Test II: React`

### Features

- Get posts from API and store in redux.
- Display posts by 10 items per page.
- Display loading spinner.
- Add post: data validation (check if title or body is empty), randomize id and userId, show toast after adding successfully.

### Usage

Clone this repository.

```bash
git clone https://github.com/thangnguyen253/SETA_TEST_NguyenDucThang.git
```

Then

```bash
cd SETA_TEST_NguyenDucThang/post-management
npm install
npm start
```
