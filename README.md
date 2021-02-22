# is-a-regular-object-react

`is-a-regular-object-react` is a tiny, dead-simple utility function for identifying regular JavaScript objects. In JavaScript, a `NULL` will show a `typeof` "object". An array will also show a `typeof` "object". This function returns `TRUE` for non-`NULL`, non-array objects - and it returns `FALSE` for everything else.

**NOTE:** This package is for React projects.  It utilizes the `react` library to check for valid React elements - which are idenitified in normal JS as having `typeof` "object".  If you are not working in a React project, or if you have no need to distinguish React elements from "regular" JS objects, you should consider using `@toolz/is-a-regular-object`.  

## Usage

After installation, import the package:

```javascript
import { isARegularObject } from '@toolz/is-a-regular-object-react';
```

Once imported, the function can be called directly as such:

```javascript
isARegularObject({}); // true
isARegularObject({one: 'uno', two: 'dos'}); // true
isARegularObject({numbers: [1, 2, 3], letters: ['a', 'b', 'c']}); // true
 
isARegularObject(null); // false
isARegularObject([]); // false
isARegularObject([1, 2, 3]); // false
isARegularObject(''); // false
isARegularObject('object'); // false
isARegularObject(() => console.log('foo')); // false
isARegularObject(<></>); // false
isARegularObject(<><div>foo</div></>); // false
```
