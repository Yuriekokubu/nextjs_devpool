interface GreetingOptions {
    name: string;
    age: number;
    format: "Default" | "Table";
}

function greeting(options: GreetingOptions): void {
    const { name, age, format } = options;

    if (format === "Table") {
        console.table({ Name: name, Age: age });
    } else if (format === "Default") {
        console.log(`Hi ${name}, Age: ${age}`);
    } else {
        console.log("Unknown format");
    }
}


greeting({
    name: "Alice",
    age: 18,
    format: "Table"
});

greeting({
    name: "Bob",
    age: 25,
    format: "Default"
});

// greeting({ name: "Charlie", age: 18, format: "test_error" })
