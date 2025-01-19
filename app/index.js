import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  Text,
  StyleSheet,
} from "react-native";
import add from "./add";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      // console.log(input)
      const processedInput = input.replace(/\\n/g, "\n");
      const sum = add(processedInput);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>String Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    color: "green",
  },
  error: {
    marginTop: 16,
    fontSize: 18,
    color: "red",
  },
});
