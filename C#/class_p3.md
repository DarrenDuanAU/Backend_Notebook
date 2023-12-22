# C-sharp

## Class Part 3
### Class Access Modifiers
- public
  - accessible from everywhere
- private
  - accessiable only from the class
- protected
  - accessiable only from the class and its derived classes
- internal
  - accessiable only from the same assembly
- protected internal
  - accessiable from the same assembly or any derived calsses


### Constructors and Inheritance
如果class A 是继承了 class B，当实例化 class A 的时候，会先运行class B 的 constructor 然后再运行 class A 的constructor

```C#
namespace Constructors
{
  public class Vehicle
  {
    private readonly string _registrationNumber;

    public Vehicle(string registrationNumber)
    {
      _registrationNumber = registrationNumber;
      Console.WriteLine("Vehicle is being initialized, {0}", registrationNumber);
    }
  }

  public class Car : Vehicle
  {
    public Car(string registrationNumber)
      :base(registrationNumber)
    {
      Console.WriteLine("Car is being initialized, {0}", registrationNumber);
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      var car = new Car("XYZ123");
    }
  }
}
//运行这个程序的output为：
// Vehicle is being initialized, XYZ123
// Car is being initialized, XYZ123

```

### Upcasting and Downcasting
### Boxing and Unboxing
