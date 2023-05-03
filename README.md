# Balanced Parentheses

Library for checking balanced parentheses in a string.

## Usage

```typescript
import { Utility } from 'balanced-parentheses';

console.log(Utility.isBalanced("()")); // true
console.log(Utility.isBalanced("()()")); // true
console.log(Utility.isBalanced(")(")); // false
console.log(Utility.isBalanced("")); // true
console.log(Utility.isBalanced("((()))")); // true
console.log(Utility.isBalanced("((()")); // false
```

## API

`isBalanced(s: string): boolean`

Returns `true` if parentheses in string s are balanced, otherwise false.
