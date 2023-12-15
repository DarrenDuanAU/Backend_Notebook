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


#### Constructors

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

#### initializers

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

#### Params Modifier

```C#
public class Calculator
{
  public int Add(params int[] numbers){}
}

var result = calculator.Add(new int[]{1, 2, 3, 4});
var result = calculator.Add(1, 2, 3, 4);
//因为使用了params modifier，我们可以使用多个params，不必非要建立一个新的 int[].

```

