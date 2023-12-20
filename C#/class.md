# C-sharp

## Class
### Class Members
- Instance: accessible from an object.

```C#
  Person person = new Person();
  person.Introduce();
```

```C#
  Console.WriteLine();
```

### Why use static members? 
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
      // 我们需要在constructor内馅给Order创建一个instance（不然无法对Orders进行操作），而Id和Name是有默认值的，因为Id为int，Id的默认值是0，Name是string，Name的默认值是null。
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
# fields
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
    //注意，我们这里使用了readonly，也就是说，不论如何，这个Order的list不会被重新initialize。

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
  public void Main(string[] args)
  {
    var person = new Person();
    person.SetBirthdate(new DateTime(1982, 1, 1));
    Console.WriteLine(person.GetBirthdate());
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
    Birthdate = birthdate;
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
