import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../Shared/Color";
import { Card } from "react-native-paper";
 
const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

function FunctionList(props) {
  return (
    
    <View style={styles.container}>
      <View style={styles.item}>
        <Card
          style={styles.card}
          onPress={() => props.navigation.navigate("Services")}
        >
          <Card.Cover
            source={require("../../assets/services.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Services</Text>
        </Card>

        <Card
          style={styles.card}
          onPress={() => props.navigation.navigate("Donations")}
        >
          <Card.Cover
            source={require("../../assets/donation.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Donation</Text>
        </Card>
      </View>
      <View style={styles.item}>
        <Card
          style={styles.card}
          onPress={() => props.navigation.navigate("History")}
        >
          <Card.Cover
            source={require("../../assets/history.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>History</Text>
        </Card>

        <Card
          style={styles.card}
          onPress={() => props.navigation.navigate("Activities")}
        >
          <Card.Cover
            source={require("../../assets/activities.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Activities</Text>
        </Card>
      </View> 
    </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
    height:windowheight,
    // width:windowWidth,
    paddingTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: windowWidth / 2,
  },
  card: {
    backgroundColor: "#fb7185",
    margin: 10,
    borderBottomWidth: 2,
    borderRadius: 20,
    alignItems: "center",
  },
  cover: {
    backgroundColor: "#fb7185",
    marginTop: 20,
    marginBottom: 50,
    width: 150,
    height: 150,
  },
  title: {
    color: Colors.gray,
    position: "absolute",
    bottom: 10,
    left: 30,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold 200",
  },
});

export default FunctionList;
