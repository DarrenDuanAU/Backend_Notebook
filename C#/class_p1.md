# C-sharp

## Class Part 1
### Class Members

有2种形式class，一种是Instance，这种情况下，需要class实例化后才能access object。第二种是static，这种情况下，我们直接调用class就能access function。

- Instance: accessible from an object.
- Static: accessible from the class.

```C#
//Instance
  Person person = new Person();
  person.Introduce();
```

```C#
//Static
  Console.WriteLine();
```

#### Why use static members? 
- To represent concepts that are singleton.
  - for example: DateTime.Now  (例如：当地时间，这个明显是为一个单例，我们不需要实例化就可以使用)
  - Console.WriteLine()


### Constructors

```C#
using System.Collections.Generic;

namespace CsharpIntermediate
{

  public class Order 
  {
  }

  public class Customer
  {
    public int Id;
    public string Name;
    public List<Order> Orders;

    public Customer()
    {
      Order = new List<Order>();
      // 我们需要在constructor内先给Order创建一个instance（不然无法对Orders进行操作），而Id和Name是有默认值的，因为Id为int，Id的默认值是0，Name是string，Name的默认值是null。
    }

    // 这里我们用了“:this()”, this是指该Class，所以this()指的是Customer()这个无参数的构造函数。所以在运行Customer(int id)前会先运行，Customer()。下面的Customer(int id, string name) 也是一样。
    public Customer(int id)
      :this() 
    {
      this.Id = id;
    }

    //我们现在有3个构造函数：
    //public Customer() 
    //public Customer(int id)
    //public Customer(int id, string name) 
    //在初始化时，我们可以按三种情况构造这个Customer
    public Customer(int id, string name) 
      :this()
    {
      this.Id = id;
      this.Name = name;
    }
  }
}
```
### fields
如果我们不想要把一个值被突然被重置，我们可以有另外一种写法。
```C#
using System.Collections.Generic;

namespace CsharpIntermediate
{

  public class Order 
  {
  }

  public class Customer
  {
    public int Id;
    public string Name;
    public readonly List<Order> Orders = new List<Order>();
    //注意，我们这里使用了readonly，也就是说，不论如何，这个Order的list不会被重新initialize，在.net中，readonly的variable只能在declaration和constrictor中进行赋值，之后就不能在给他赋值了。

    public Customer(int id)
    {
      this.Id = id;
    }

    public Customer(int id, string name) 
      :this(id)
    {
      this.Name = name;
    }

    public void Promote()
    {
      Orders = new List<Order>();
      //在其他函数就算调用了Promote，依然不会initialize Orders这个variable。
    }
  }
}
```

### initializers

```C#
using System.Collections.Generic;

namespace CsharpIntermediate
{
  public class Person
  {
    public int Id;
    public string FirstName;
    public string LastName;
    public DateTime Birthdate;
  }
}

//除了我们用Construtor以外，我们有还比较简便的方法，就是用initializer：
var person = new Person
                {
                  FirstName = "Mosh",
                  LastName = "Hamedani"
                };
```
### Params Modifier

```C#
public class Calculator
{
  public int Add(params int[] numbers){}
}

var result = calculator.Add(new int[]{1, 2, 3, 4});
var result = calculator.Add(1, 2, 3, 4);
//因为使用了params modifier，我们可以使用多个params，不必非要建立一个新的 int[].

```

### Access Modifiers
- Public
- Private
- Protected
- Internal
- Protected Internal

why we need it?
- Encapsulation/ Information Hiding
  - Define fields as private
  - Provide getter/setter methods as public
  ```C#
  public class Person
  {
    private DateTime _birthdate;

    public void SetBirthdate(DateTime birthdate)
    {
      _birthdate = birthdate;
    }
    public DateTime GetBirthdate()
    {
      return _birthdate;
    }
  }


  class program
  {
    static void Main(string[] args)
    {
      var person = new Person();
      person.SetBirthdate(new DateTime(1982, 1, 1));
      Console.WriteLine(person.GetBirthdate());
    }
  }

  ```
- Inheritance
- Polymorphism


### Properties

Better way to write the getter and setter function
```C#
public class Person
{
  private DateTime _birthdate;
  public DateTime Birthdate
  {
    get { return _birthdate; }
    set { _birthdate = value; }
    //get和set都是C#的key word
  }
}
```
Auto-implemented Properties
```C#
//因为上面的get和set没有涉及什么逻辑判断，我们可以把他写为下面的形式：
public class Person
{
  private DateTime _birthdate { get; set; }
}
```

```C#
//在这个示例里，为了只能在Person实例化的时候设置birthdate，因此我们把birthdate的set设置为了private，而在constructor中初始化birthdate。
public class Person
{
  public DateTime _birthdate { get; private set; }

  public Person(DateTime birthdate)
  {
    this._birthdate = birthdate;
  }

//这里的Age的值是由birthdate计算出来的，而且Age不应该直接设置，所以Age没有set。
  public int Age
  {
    get
    {
      var timeSpan = DateTime.Today - Birthdate;
      var years = timeSpan.Days/365;

      return years;
    }
  }
}

public void Main(string[] args)
{
  var person = new Person();
  person.SetBirthdate(new DateTime(1982, 1, 1));
  Console.WriteLine(person.Age);
}
```


### 课后笔记
在C#中，public string name； 和 public string name { set; get; } 有什么区别？为什么我需要set 和get来操作name？

- public string name;：
这是一个公共字段（Field），直接访问和修改。外部代码可以直接通过对象的实例来访问或修改name字段的值。这样的字段在面向对象编程中被认为是违反封装性原则的，因为它们可以在外部被直接访问，导致代码的脆弱性。

```C#
MyClass obj = new MyClass();
obj.name = "John"; // 直接访问字段
```

- public string name { get; set; }：

这是一个属性（Property），使用了自动实现的属性，它隐藏了字段的具体实现。属性提供了一种更加控制访问的方式，允许你在读取或设置属性值时执行逻辑。在这种情况下，C# 自动为你创建了一个私有字段，并提供了公共的 get 和 set 方法，使你能够通过属性来访问和修改字段的值。

```C#
MyClass obj = new MyClass();
obj.name = "John"; // 使用属性，实际调用 set 方法
Console.WriteLine(obj.name); // 使用属性，实际调用 get 方法
```
为什么需要使用属性而不是公共字段：

封装性： 属性允许你隐藏底层实现，控制对字段的访问。
验证和逻辑： 你可以在属性的 set 方法中添加验证逻辑，确保设置的值符合要求。
适应未来变化： 如果后续需要更改属性的实现，你可以在不更改类外部使用该属性的代码的情况下进行修改。
总的来说，使用属性提供了更好的封装性和控制，使你能够在需要时执行逻辑。在很多情况下，使用属性而不是直接暴露字段是一种良好的编程实践。