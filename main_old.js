function calc(exec, a, b) {
    if (typeof a != "number"||typeof b != "number") {
    let result = "error!";   
         return result;
    }
    if (exec == "sum") {
        result = a + b;
        return result;
    } else if (exec == "diff") {
        result = a - b;
        return result;
    } else if (exec == "mult") {
        result = a * b;
        return result;
    } else if (exec == "dev") {
        result = a / b;
        return result;
    }
    else {
        result = "unknown identificator!"
     return result;
    }
}
let message = calc("dev",1,2);
alert(message);