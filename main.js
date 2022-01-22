function calc(exec, a, b) {
    if (typeof a != "number" || typeof b != "number") {
        let result = "error!";
        return result;
    }
    switch (exec) {
        case "sum":
            result = a + b;
            return result;
            break;
        case "diff":
            result = a - b;
            return result;
            break;
        case "mult":
            result = a * b;
            return result;
            break;
        case "div":
            result = a / b;
            return result;
            break;
        default:
            result = "unknown identificator!"
            return result;
            breake;
    }
}
alert(calc("diff", 1, 2));