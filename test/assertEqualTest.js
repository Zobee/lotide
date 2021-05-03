const assertEqual = require('../assertEqual');

assertEqual(1,1)//pass
assertEqual("Hello", "Hello")//pass
assertEqual(false, false)//pass
assertEqual(1,null)//fail
assertEqual(1,"1")//fail
assertEqual("true", true)//fail