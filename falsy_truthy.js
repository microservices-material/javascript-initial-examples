function falsyTruthy(someValue) {
  if (someValue) {
    return 'is truthy'
  } else { 
    return 'is falsy'
  }
}

/*
 The falsy values are: false / null / undefined / empty String / 0 / NaN.
 Note that the empty array [] is a truthy value. What is falsy is [].length .
 */
 
/*
 Boolean operators can be applied to *any* value, through the truthy/falsy concept
 E.g.
 
 '' || 'hola'         yields 'hola'
 'chau' || 'hola'     yields 'chau'
 '' && 'hola'         yields ''
 'chau' && 'hola'     yields 'hola'
 */
 
/*
 * Evaluate the following
 
falsyTruthy('hola')
0 || 500
20 || 500
0 && 500
20 && 500
*/
