# prep-javascript-loops-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the **condition** expression in the `for` and `while` loops?<br>
  Condition expressions are needed to determine if the program continues to loop or stop. if the condition is true, the loop continues until it breaks . If the condition is false, the loop stops.

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?<br>
  Not sure if I understand this correctly. The **initialization**, as it name suggests, is evaluated once at the beginning of the for loop. For loop needs some initial value to begin.

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?<br>
  The **condition** is first evaluated after initialization. If the condition is true, for-loop will excute the code blocks within and execute the evaluating the **final expression** as well. After that, the **condition** is evaluated again. If the **condition** returns false after any evaluation, the loop stops.

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?<br>
  **final expression** is evaluated after each successful evaluation of the code blocks without encountering any `break` statements.

- What is the purpose of the **final expression** in a `for` loop?<br>
  **final expression** changes the value of loop index i to create a stopping conditon for the loop.

- What types of data should the `for...in` loop be used on? <br>
  `for..in` should be used on objects and arrays. Array is also classified as an object data type.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
