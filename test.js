"use-strict";

function test() {
    var person1 = new person("p1", "p11");
    var person2 = new person("p2", "p22");
    var person3 = new person("p3", "p33");
    var person4 = new person("p4", "p44");
    var person5 = new person("p5", "p55");
    var objects = new list();

    console.log("List is empty: " + objects.isEmpty());
    console.log("List is full: " + objects.isFull());
    console.log("List size: " + objects.size());
    console.log("List capacity: " + objects.capacity());

    console.log("----------------------------------");
    console.log("");

    console.log("Add person to list");
    console.log(objects.add(person1));
    console.log(objects.add(person4));
    console.log(objects.add(person3));
    console.log(objects.add(person5));
    console.log("List size: " + objects.size());
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Add person to list at index");
    console.log(objects.addAt(person2, 3));
    console.log("List size: " + objects.size());
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Get person to list");
    console.log(objects.get(1));
    console.log("List size: " + objects.size());

    console.log("----------------------------------");
    console.log("");

    console.log("Method toString");
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Returns the position of the indicated element")
    console.log("The element " + objects.get(objects.indexOf(person3)) + " is in the position " + objects.indexOf(person3));

    console.log("----------------------------------");
    console.log("");

    console.log("Returns the position of the indicated element")
    console.log("The element " + objects.get(objects.lastIndexOf(person1)) + " is in the position " + objects.lastIndexOf(person1));

    console.log("----------------------------------");
    console.log("");

    console.log("First element of the list");
    console.log(objects.firstElement());

    console.log("----------------------------------");
    console.log("");

    console.log("Last element of the list");
    console.log(objects.lastElement());

    console.log("----------------------------------");
    console.log("");

    console.log("Remove element indicating the index");
    console.log(objects.remove(2));

    console.log("----------------------------------");
    console.log("");

    console.log("Method toString");
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Remove element");
    console.log(objects.removeElement(person5));

    console.log("----------------------------------");
    console.log("");

    console.log("Method toString");
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Replace element");
    console.log(objects.set(person3, 2));

    console.log("----------------------------------");
    console.log("");

    console.log("Method toString");
    console.log(objects.toString());

    console.log("----------------------------------");
    console.log("");

    console.log("Clear list"),
    console.log(objects.clear());

    console.log("----------------------------------");
    console.log("");

    console.log("Method toString");
    console.log(objects.toString());
}

window.onload = test();