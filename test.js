"use-strict";

function test() {
    var person1 = new person("ruben", "hernandez");
    var objects = new list();

    console.log("List is empty: " + objects.isEmpty());
    console.log("List is empty: " + objects.isEmpty());
    console.log("List size: " + objects.size());
    console.log("----------------------------------");
    console.log("");

    console.log("Add person to list");
    objects.add(person1);
    console.log("List size: " + objects.size());
}

window.onload = test();