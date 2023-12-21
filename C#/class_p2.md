# C-sharp

## Class Part 2
### Class Relationship
- Inheritance (Is-a: A Car is a Vehicle.)
  - Pros: Code re-use, easier to understand
  - Cons: Tightly coupled, fragile, can be abused
- Composition (Has-a: )
  - Pros: Code re-use, great flexibility, loose coupling
  - Cons: A little to understand

### Inheritance
```C#
//比如我们打算设计一款类似于PPT的软件，里面会有很多object，我们的设计如下：
namespace Inheritance
{
  //基础功能
  public class PresentationObject
  {
    public int Width { get; set; }
    public int Height { get; set; }

    public void Copy()
    {
    }
    
    public void Duplicate()
    {
    }
  }

  //Text继承了PresentationObject的功能
  public class Text : PresentationObject
  {
    public int FontSize { get; set; }
    public int FontName { get; set; }

    public void AddHyperlink(string url)
    {
      Console.WriteLine("We add a link to " + url )
    }
  }
}
```

### Composition

```C#
//我们的DbMigrator和Installer都需要Logger这种功能，所以我们在这两个的constructor中进行了实例化，然后再使用其中的功能。
namespace Composition
{
  public class Logger
  {
    public void Log(string message)
    {
      Console.WriteLine(message);
    }
  }

  public class DbMigrator
  {
    private readonly Logger _logger;

    public DbMigrator(Logger logger)
    {
      _logger = logger;
    }
    public void Migrate()
    {
      _logger.Log("We are migrating.......")
    }
  }

  public class Installer
  {
    private readonly Logger _logger;

    public Installer(Logger logger)
    {
      _logger = logger;
    }
    public void Install()
    {
      _logger.Log("We are installing.......")
    }
  }
}
```

### 课后笔记
实际上Inheritance和Composition都可以实现类似的功能，但是Composition可以让代码更加的loose-coupling，也就是各个class之间减少了相互依赖（可以做到0依赖），让代码更加可维护。尽管Inheritance更容易理解，Composition的方式可能是更好的一种approach。
![alt text](https://github.com/DarrenDuanAU/big-brain/blob/main/demo-images/signin-demo.png)
![alt text](https://github.com/DarrenDuanAU/big-brain/blob/main/demo-images/signin-demo.png)