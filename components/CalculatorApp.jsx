import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";

export const Calculator = () => {
  const [calculation, setCalculation] = useState(0);
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [operator, setOperator] = useState("");
  const [equals, setEquals] = useState(false);

  useEffect(() => {
    // Handles which number to show on the calculator
    if (operator !== "" && secondNumber !== "" && equals === false) {
      setCalculation(secondNumber);
    } else if (secondNumber === "") {
      setCalculation(firstNumber);
    } else {
      setCalculation(answer);
    }

    // Handles the math when the equals has been pressed
    if (equals === true) {
      if (operator === "÷") {
        setAnswer(division(firstNumber, secondNumber));
      } else if (operator === "x") {
        setAnswer(multiplication(firstNumber, secondNumber));
      } else if (operator === "+") {
        setAnswer(addition(firstNumber, secondNumber));
      } else if (operator === "-") {
        setAnswer(subtraction(firstNumber, secondNumber));
      }
    }

    if (answer !== "") {
      // Handles when an equal has been pressed and the answer has changed
      setFirstNumber(answer);
      setSecondNumber("");
      setAnswer("");
      setOperator("");
      setEquals(false);
    }
  }, [firstNumber, secondNumber, equals, operator, answer]);

  const handleClear = () => {
    // Clears everything and resets all states to the original value
    setFirstNumber("0");
    setSecondNumber("");
    setOperator("");
    setEquals(false);
    setAnswer("");
  };

  const handleEquals = () => {
    setEquals(true);
  };

  const handleOperator = (operatorButton) => {
    // Handles the +/- for the first number
    if (operatorButton === "+/-" && operator === "") {
      setFirstNumber(firstNumber * -1);
    }
    // Handles the +/- for the second number
    else if (operatorButton === "+/-" && operator !== "") {
      setSecondNumber(secondNumber * -1);
    }
    // Handles the sqrt for the first number
    else if (operatorButton === "√" && operator === "") {
      setFirstNumber(+parseFloat(Math.sqrt(firstNumber)).toFixed(8));
    }
    // Handles the sqrt for the second number
    else if (operatorButton === "√" && operator !== "") {
      setSecondNumber(+parseFloat(Math.sqrt(secondNumber)).toFixed(8));
    }
    // Handles if any of the four basic operators are clicked
    else if (
      operatorButton === "÷" ||
      operatorButton === "x" ||
      operatorButton === "+" ||
      operatorButton === "-"
    ) {
      setOperator(operatorButton);
    }
  };

  const handleNumbers = (number) => {
    // Sets the first number as the number being typed in the calculator
    if (firstNumber === "0" && operator === "") {
      setFirstNumber(number);
    }
    // Handles the addition of digits in second number
    else if (operator !== "") {
      setSecondNumber(secondNumber + number);
    }
    // Handles the addition of digits in first number
    else {
      setFirstNumber(firstNumber + number);
    }
  };

  const addition = (a, b) => {
    return parseFloat(a) + parseFloat(b);
  };

  const subtraction = (a, b) => {
    return parseFloat(a) - parseFloat(b);
  };

  const multiplication = (a, b) => {
    return +parseFloat(parseFloat(a) * parseFloat(b)).toFixed(8);
  };

  const division = (a, b) => {
    if (b == 0) {
      return "Err";
    }

    return +parseFloat(parseFloat(a) / parseFloat(b)).toFixed(8);
  };

  return (
    <View style={styles.container}>
      <View style={styles.answer}>
        <Text style={styles.textAnswer}>{calculation}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.clear}
          onPress={() => {
            handleClear();
          }}
        >
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("+/-");
          }}
        >
          <Text style={styles.text}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("√");
          }}
        >
          <Text style={styles.text}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("÷");
          }}
        >
          <Text style={styles.text}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("7");
          }}
        >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("8");
          }}
        >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("9");
          }}
        >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("x");
          }}
        >
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("4");
          }}
        >
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("5");
          }}
        >
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("6");
          }}
        >
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("-");
          }}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("1");
          }}
        >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("2");
          }}
        >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("3");
          }}
        >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleOperator("+");
          }}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.zero}
          onPress={() => {
            handleNumbers("0");
          }}
        >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers(".");
          }}
        >
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            handleEquals();
          }}
        >
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#530707",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    minWidth: 75,
    minHeight: 75,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#C2B9B9",
  },
  zero: {
    minWidth: 150,
    minHeight: 75,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#C2B9B9",
  },
  operator: {
    minWidth: 75,
    minHeight: 75,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#563737",
  },
  answer: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 75,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    marginBottom: 25,
    backgroundColor: "#C2B9B9",
    borderRadius: 8,
  },
  clear: {
    minWidth: 75,
    minHeight: 75,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F76363",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
  textAnswer: {
    color: "white",
    fontSize: 30,
  },
});
