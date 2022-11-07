import { View, Checkbox } from "native-base";
import { Dimensions, StyleSheet, Text } from "react-native";
import React, {    useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Shared
import Colors from "../../Shared/Color";
import Input from "../../Shared/Form/Input";
import FormContainer from "../../Shared/Form/FormContainer";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
import Error from "../../Shared/Error";
import Header from "../../Shared/Header";
 
// Dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Register(props) {
  const [error, setError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const register = () => {

    const user = {
      email,
      firstname ,
      middlename ,
      lastname ,
      password,
      confirmpassword
    };

    if (
      email === "" ||
      firstname === "" ||
      middlename === "" ||
      lastname === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setError("Please fill in the form correctly");
    } else if (password != confirmpassword) {
      setError("The password confirmation is not match");
    } else if (isSelected == false) {
      setError("Read Terms and Condtions");
    } else {
      setError("Success");
      props.navigation.navigate("Profile");
    }
    console.log(user)
  };

  const handleChange = (event) => {
    setSelection((current) => !current);
  };

  return (
    <SafeAreaProvider style={[{ flex: 1 }, styles.container]}>
      <Header navigation={props.navigation} />
      <FormContainer title={"Register"}>
        <Input
          style={[styles.input]}
          placeholder={"Firstname"}
          name={"firstname"}
          id={"firstname"}
          value={firstname}
          onChangeText={(text) => setFirstname(text.toLowerCase())}
        />
        <Input
          style={[styles.input]}
          placeholder={"Middlename"}
          name={"middlename"}
          id={"middlename"}
          value={middlename}
          onChangeText={(text) => setMiddlename(text.toLowerCase())}
        />
        <Input
          style={[styles.input]}
          placeholder={"Lastname"}
          name={"lastname"}
          id={"lastname"}
          value={lastname}
          onChangeText={(text) => setLastname(text.toLowerCase())}
        />
        <Input
          style={[styles.input]}
          placeholder={"Email address"}
          name={"email"}
          id={"email"}
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Input
          style={[styles.input]}
          placeholder={"Username"}
          name={"username"}
          id={"username"}
          value={username}
          onChangeText={(text) => setUsername(text.toLowerCase())}
        />
        <Input
          style={[styles.input]}
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          style={[styles.input]}
          placeholder={"Confirm password"}
          name={"confirmpassword"}
          id={"confirmpassword"}
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={(text) => setConfirmpassword(text)}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onChange={handleChange}
            style={styles.checkbox}
            colorScheme="danger"
          />
          <Text style={styles.label}>
            I agree to the
            <Text style={styles.Clickhere}> Terms & Conditions</Text>
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <EasyButton
            large
            style={styles.ButtonBorder}
            onPress={() => register()}
          >
            <Text style={styles.ButtonText}>REGISTER</Text>
          </EasyButton>
        </View>
      </FormContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignContent: "center",
    height: windowHeight,
    maxWidth: windowWidth,
    backgroundColor: Colors.main,
  },
  buttonGroup: {
    width: "80%",
    alignItems: "center",
    marginTop: 30,
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },

  ButtonBorder: {
    borderColor: "red",
    borderWidth: 2,
  },
  ButtonText: {
    color: Colors.TextColor,
    fontWeight: "bold",
  },
  Clickhere: {
    color: Colors.TextColor,
    fontStyle: "italic",
  },
  Newuser: {
    fontSize: 12,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    marginTop: 5,
    onCheckColor: Colors.red,
  },
  label: {
    margin: 8,
  },
});

export default Register;
