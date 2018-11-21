"use-stric";

var SIZE = 5;

function person(name, subname) {
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }
    this.name = name || "";
    this.subname = subname || "";
}

function list() {
    if (!(this instanceof list)) {
        throw new invalidAccesConstructor();
    }

    var _person = [];

    this.sort = function (_person) {
        _person.sort(function (a, b) {
            if (a.subname == b.subname) {
                return (a.name > b.name);
            } else {
                return (a.subname > b.subname);
            }
        });
        return _person;
    }

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
            throw new isFullException();
        }
        _person.push(person);
        _person.sort(function (a, b) {
            if (a.subname < b.subname) {
                return -1;
            } else if (a.subname > b.subname) {
                return 1;
            } else if (a.subname == b.subname) {
                if (a.name < b.name) {
                    return -1;
                } else {
                    return 1;
                }
            }
        })
        return this.size();
    }

    this.get = function (index) {
        if (index < 0 || index > SIZE) {
            throw new indexLimitException();
        }
        var person = _person[index].name + " " + _person[index].subname;
        return person;

    }

    this.toString = function () {
        var str = "";
        for (let i = 0; i < _person.length; i++) {
            str = str + _person[i].name + " " + _person[i].subname + "\n";
        }
        return str;
    }

    this.indexOf = function (person) {
        var elem = _person.indexOf(person);
        return elem;
    }

    this.capacity = function () {
        return SIZE;
    }

    this.clear = function () {
        return _person.length = 0;
    }

    this.firstElement = function () {
        if (this.isEmpty()) {
            throw new isEmptyException();
        }
        return _person[0].name + " " + _person[0].subname;
    }

    this.lastElement = function () {
        if (this.isEmpty()) {
            throw new isEmptyException();
        }
        return _person[_person.length - 1].name + " " + _person[_person.length - 1].subname;
    }

    this.remove = function (index) {
        if (index < 0 || index > SIZE) {
            throw new indexLimitException();
        }
        var element = _person.splice(index, 1);
        var result = element[0].name + " " + element[0].subname;
        return result;
    }

    this.removeElement = function (person) {
        var elem = _person.indexOf(person);
        if (elem !== -1) {
            _person.splice(elem, 1);
            return true;
        } else {
            return false;
        }
    }
}
list.prototype = {};
list.prototype.constructor = list;