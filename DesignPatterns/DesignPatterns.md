## OOP 
 
面向对象编程
The four principles of Object-oriented programming (OOP): 

- Encapsulation(封装)
  - 举例如下：
```java
public class Account {
  private float balance;
  
  public void deposit (float amount) {
    if (amount > 0) 
      this.balance += amount;
  }
    
  public void withdraw (float amount) {
    if (amount > 0) 
      this.balance -= amount;
  }

  public float getBalnce() {
    return balance;
  }
}

//我们把数据balance设为private，方法设置public，让这个class的consumer只能通过设定的方法来操作数据，有以下好处：

// 数据隐藏和访问控制： 将 balance 声明为私有变量，防止外部直接访问和修改。这样可以确保对数据的访问只能通过指定的方法进行，提高了数据的安全性。（避免了比如 account.balance = -1 这种操作）；

// 良好的封装提供更好的控制： 通过封装，可以在存款和取款方法中添加必要的条件和逻辑，例如确保存款和取款金额大于零等。这有助于维护数据的一致性和正确性。

// 易于扩展和维护： 如果需要修改存款或取款的实现逻辑，只需要修改相应的方法，而不会影响使用这个类的其他部分。这使得代码更容易维护和扩展。

```
- Abstraction（抽象）
  - 什么是Abstraction：reduce complexity by hiding unnecessary details （比如remove control，在一个遥控器内可能有复杂的电路与功能，但是我们只给用户展示用户真正关心，真正使用的interface给用户）
    - 举例如下：
```java
public class MailService {
  public void sendEmail () {
    connect();
    disconnect();
    authenticate();
  }
    
  private void connect() {
    System.out.println("Connect")
  }
  private void disconnect() {
    System.out.println("Disconnect")
  }  
  private void authenticate() {
    System.out.println("Authenticate")
  }
}

//我们把方法connect, disconnect, authenticate设为private，方法sendEmail设置public，隐藏了sendEmail实现的具体细节，只留下comsumer（调用者）关心的的方法（sendEmail），

```
  - 
- Inheritance（继承）
  - a good way to reduce the code. all the attribute and method will be inherited by the child.
  - 举例如下：
```java
public class UIControl {
  public void enable () {
    System.out.println("Enabled");
  }
}
```

```java
public class TextBox extends UIControl {
}

//TextBox作为UIControl的一个继承者，他会拥有UIControl的所有属性。
```

- Polymorphism（多态）
  - Polymorphism : Ploy == Many && Morphism == From => Polymorphism == many from
  - 举例如下：

```java
public abstract class UIControl {
  public void enable () {
    System.out.println("Enabled");
  }
  public abstract void draw();
}

```

```java
public class TextBox extends UIControl {
  @Override
  public void draw() {
    System.out.println("Drawing a TextBox...");
  }
}
```

```java
public class CheckBox extends UIControl {
  @Override
  public void draw() {
    System.out.println("Drawing a CheckBox...");
  }
}
```

```java
public class Main {
  public static void main(String[] args) {
    drawUIControl(new TextBox());
    // drawUIControl(new CheckBox());
  }
  public static void drawUIControl(UIControl control) {
    control.draw();
  }
}
```

They are important for creating modular, extensible, and reusable code, enhancing code organization and maintainability.