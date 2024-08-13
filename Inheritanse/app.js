//_ Inheritance (Miras Alma) Kavramı

class Person {
    firstname = "Enes";

    write() {
        console.log(this.firstname);
    }
}

class Student extends Person {  //* genişletme - miras alma yapılışı
    write() {
        console.log("Person sınıfından geldi: ", this.firstname);    //* mevcut class daki özellik kullanımı -- this.
        console.log(super.write()); //* üst sınıf/miras alınan sınıftaki özellik kullanılır. -- super.
    }
}

const student1 = new Student();
student1.write();