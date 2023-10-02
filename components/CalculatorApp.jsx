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
    // console.log("first number >>>", firstNumber);
    // console.log("second number >>>", secondNumber);
    // console.log("answer >>>", answer);

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
      setFirstNumber(Math.sqrt(firstNumber));
    }
    // Handles the sqrt for the second number
    else if (operatorButton === "√" && operator !== "") {
      setSecondNumber(Math.sqrt(secondNumber));
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
    return parseFloat(a) * parseFloat(b);
  };

  const division = (a, b) => {
    if (b == 0) {
      return "Err";
    }

    return parseFloat(a) / parseFloat(b);
  };

  return (
    <View style={styles.container}>
      <View style={styles.answer}>
        <Text>{calculation}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleClear();
          }}
        >
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("+/-");
          }}
        >
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("√");
          }}
        >
          <Text>√</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("÷");
          }}
        >
          <Text>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("7");
          }}
        >
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("8");
          }}
        >
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("9");
          }}
        >
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("x");
          }}
        >
          <Text>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("4");
          }}
        >
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("5");
          }}
        >
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("6");
          }}
        >
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("-");
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("1");
          }}
        >
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("2");
          }}
        >
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers("3");
          }}
        >
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOperator("+");
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.zero}
          onPress={() => {
            handleNumbers("0");
          }}
        >
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNumbers(".");
          }}
        >
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleEquals();
          }}
        >
          <Text>=</Text>
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
  },
  row: {
    flexDirection: "row",
  },
  button: {
    minWidth: 70,
    minHeight: 50,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  zero: {
    minWidth: 140,
    minHeight: 50,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  answer: {
    minWidth: 280,
    minHeight: 50,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
});
