"use-stric";

var SIZE = 5;

function person(name, subname) {
    if (!(this instanceof person)) {
        throw invalidAccesConstructor();
    }
    this.name = name || "";
    this.subname = subname || "";
}

function list() {
    if (!(this instanceof list)) {
        throw invalidAccesConstructor();
    }

    var _person = [];

    Object.defineProperty(this, "person", {
        get: function () {
            var nextIndex = 0;
            return {
                next: function () {
                    return nextIndex < _person.length ?
                        { value: _person[nextIndex++], done: false } :
                        { done: true }
                }
            }
        }
    });

    this.isEmpty = function () {
        var empty = false;
        if (_person.length === 0) {
            return empty = true;
        } else {
            return empty;
        }
    }

    this.isFull = function () {
        var full = false;
        if (_person.length === SIZE) {
            return full = true;
        } else {
            return full;
        }
    }

    this.size = function () {
        return _person.length;
    }

    this.add = function (person) {
        if (this.isFull()) {
            throw isFullException();
        }
        _person.push(person);
        return this.size();
    }
}