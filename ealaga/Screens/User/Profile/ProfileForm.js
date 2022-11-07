// <  // const [error, setError] = useState("");
// // const [firstname, setFirstname] = useState("");
// // const [middlename, setMiddlename] = useState("");
// // const [lastname, setLastname] = useState("");
// // const [birthday, setBirthday] = useState("");
// // const [age, setAge] = useState("");
// // const [gender, setGender] = useState("");
// // const [address, setAddress] = useState("");

FormContainerProfile title={"Username"}>
<InputProfile
  placeholder={"Firstname"}
  name={"firstname"}
  id={"firstname"}
  value={firstname}
  onChangeText={(text) => setFirstname(text.toLowerCase())}
/>

<InputProfile
  placeholder={"Middlename"}
  name={"middlename"}
  id={"middlename"}
  value={middlename}
  onChangeText={(text) => setMiddlename(text.toLowerCase())}
/>

<InputProfile
  placeholder={"Lastname"}
  name={"lastname"}
  id={"lastname"}
  value={lastname}
  onChangeText={(text) => setLastname(text.toLowerCase())}
/>

<InputProfile
  tyoe={"date"}
  placeholder={"Birthday"}
  name={"birthday"}
  id={"birthday"}
  value={birthday}
  onChangeText={(text) => setBirthday(text.toLowerCase())}
/>

<InputProfile
  placeholder={"Age"}
  name={"age"}
  id={"age"}
  value={age}
  onChangeText={(text) => setAge(text.toLowerCase())}
/>

<InputProfile
  placeholder={"Gender"}
  name={"gender"}
  id={"gender"}
  value={gender}
  onChangeText={(text) => setGender(text.toLowerCase())}
/>

<InputProfile
  placeholder={"Address"}
  name={"address"}
  id={"address"}
  value={address}
  onChangeText={(text) => setAddress(text.toLowerCase())}
/>
</FormContainerProfile>

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ed45450f",
  },

  ImageContainer: {
    maxWidth: windowWidth,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  ImageCircle: {
    backgroundColor: Colors.light,
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  image: {
    height: 100,
    width: 100,
  },
});