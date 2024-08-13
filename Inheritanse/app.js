//_ Inheritance (Miras Alma) Kavramı

class Person {
    firstname = "Enes";

    write() {
        console.log(this.firstname);    //bu classı gösterir
    }
}

//#region Inheritance Giriş
// class Student extends Person {  //* genişletme - miras alma yapılışı
//     write() {
//         console.log("Person sınıfından geldi: ", this.firstname);    //* mevcut class daki özellik kullanımı -- this.
//         console.log(super.write()); //* üst sınıf/miras alınan sınıftaki özellik kullanılır. -- super.
//     }
// }

// const student1 = new Student();
// student1.write();
//#endregion


//#region This - Super - Super()

class Student2 extends Person {
    constructor(firstname, grade) {
        super(firstname);  //* miras alınan sınıftaki constructor'ı çağırır.
    }
    write() {
        super.write(); //*Miras alınan sınıfı gösterir.
    }
}

const student = new Student2();
student.write();





class Person2 {
    constructor(firstname, lastname, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
    writeInfo() {
        console.log(`Ad: ${this.firstname}, Soyad: ${this.lastname}, Maaş: ${this.salary}`);
    }
}


class Student3 extends Person2 {
    constructor(firstname, lastname, salary) {
        super(firstname,lastname,salary); 
    }
    writeInfo(){
        super.writeInfo(); //*Miras alı
    }
}

const student2 = new Student3("Enes", "Bulut", 35000);
student2.writeInfo();

//#endregion
