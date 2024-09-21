import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Home_Null = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          height: 55,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "space-center",
            paddingVertical: 18,
            paddingHorizontal: 60,
            borderRadius: 10,
            backgroundColor: selectedTab == 0 ? "black" : "transparent",
            zIndex: 1,
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: selectedTab == 0 ? "white" : "black",
            }}
          >
            All list
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "space-center",
            paddingVertical: 18,
            paddingHorizontal: 60,
            borderRadius: 10,
            backgroundColor: selectedTab == 1 ? "black" : "transparent",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Text
            style={{
              color: selectedTab == 1 ? "white" : "black",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 0.25,
            }}
          >
            Pinnned
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab == 0 ? (
        <View>
          <Image
            source={require("../Assets/splash.png")}
            style={{
              height: 350,
              width: 350,
              resizeMode: "contain",
              display: "flex",
              marginTop: 50,

              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Create your first to-do list...{" "}
          </Text>

          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "black",
              height: 50,
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 40,
            }}
          >
            <Image
              source={require("../Assets/add.png")}
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "800",
                fontSize: 15,
              }}
            >
              New List
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Image
            source={require("../Assets/no_pinned.png")}
            style={{
              height: 350,
              width: 350,
              resizeMode: "contain",
              display: "flex",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Ooops! No pinned list yet...
          </Text>
        </View>
      )}

      {/* toggle button ends here */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  toggle: {},
  text: {},
  not: {},
});

export default Home_Null;
