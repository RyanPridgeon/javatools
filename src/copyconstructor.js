function CopyConstructor(input) {

    console.log("Hello");
    let fieldNames = input.split("\n").map(line => line.split(/\s/)[0]);
    let builderLines = fieldNames.map(toBuilderLine);
    return "  // Copy constructor\n"
    + "  public X(X source) {\n"
    + "    return X.builder()\n"
    + "      " + builderLines.reduce((previous, current) => previous + "\n      " + current) + "\n"
    + "      .build();\n"
    + "  }";
    
}

function toBuilderLine(fieldName) {
    return "." + fieldName + "(" + "source.get" + fieldName[0].toUpperCase() + fieldName.slice(1) + "())";
}

export default CopyConstructor;