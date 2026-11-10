# Access Modifier:

Introduction:
Access Modifier is a keywords in TypeScript that control the accessibility of class properties and methods.
it helps maintain users security.

three main access modifiers:
public
private
protected

# Public :

public property can be accessed from anywhere.

class Student {
public name: string = "Ridoy";
public age: number = 22;
}
const student1 = new Student();

# Private :

Private property can be accessed inside class.

class Student {
private name: string = "Ridoy";

    public showName(): void {
        console.log(this.name);
    }

}

const student1 = new Student();

# Protected :

Private property can be accessed inside ist own class and child classes

class Person {
protected name: string = "Ridoy";
}

class Student extends Person {

    public showName(): void {
        console.log(this.name);
    }

}

const student1 = new Student();

# Readonly :

Readonly means that a value cannot be modified after it has been assaigned ;

let number: readonly numbers[] =[10,20,30];

# conclusion:

access modifire is importan for developers.it helps users security,
it also developers implement encapsulation and protect data from unauthorized access.
