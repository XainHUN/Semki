function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
    });
}

define("ADMIN", 1);
define("USER", 2);
define("MODER", 1);
define("GUEST", 3);
