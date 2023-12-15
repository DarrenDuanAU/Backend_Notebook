# C-sharp

## Class
#### Class Members
- Instance: accessible from an object.

```C#
  Person person = new Person();
  person.Introduce();
```

```C#
  Console.WriteLine();
```

#### Why use static members? 
- To represent concepts that are singleton.
  - for example: DateTime.Now  (例如：当地时间，这个明显是为一个单例，我们不需要实例化就可以使用)
  - Console.WriteLine()