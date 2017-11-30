juana = {
  name: 'Jeanne',
  age: 15,
  country: 'France'
}


/*
  In Javascript non-strict mode, evaluation of
  juana.city
  does not trigger an error. 
  Instead, a special value called undefined is obtained.
 */
 
/*
  Try the following.
  1.
  evaluate
  [ juana.city, juana.city || 'Dijon', juana.city && 'Dijon' ]
 
  2.
  evaluate
  juana.city = 'Toulouse'
 
  3.
  evaluate again
  [ juana.city, juana.city || 'Dijon', juana.city && 'Dijon' ]
*/