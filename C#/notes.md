# C-sharp

## Class
### 不同修饰符 class

static class vs abstruct class

感觉上是 static 更多的是一些方法的集合，不需要实例化就可以直接access。
而abstract class 是必须要被继承后才能访问相应的方法，和interface不同，不支持多继承。
```c#
public static class MathUtilities
{
    public static double Add(double a, double b)
    {
        return a + b;
    }

    public static double Subtract(double a, double b)
    {
        return a - b;
    }
}

// Usage
double sum = MathUtilities.Add(3, 4);
double difference = MathUtilities.Subtract(5, 2);
```

```c#
public abstract class Shape
{
    public abstract double GetArea();  // Abstract method

    public void Display()
    {
        Console.WriteLine("Displaying the shape.");
    }
}

public class Circle : Shape
{
    private double _radius;

    public Circle(double radius)
    {
        _radius = radius;
    }

    public override double GetArea()  // Implementation of abstract method
    {
        return Math.PI * _radius * _radius;
    }
}

// Usage
Shape shape = new Circle(5);
shape.Display();
Console.WriteLine(shape.GetArea());

```