import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { main } from "../../../../utils/colors";
import RBSheet from "react-native-raw-bottom-sheet";
import { usePost } from "../../../../suppliers/BackendInteractions/Post";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";

const Card = ({ data }) => {
  const navigation = useNavigation();
  const { updateStatus } = usePost();
  const refRBSheet = useRef();
  const [color, setColor] = useState("");
  useEffect(() => {
    if (data.status === "Pending") {
      setColor("orange-400");
    } else if (data.status === "On-Going") {
      setColor("purple-400");
    } else {
      setColor("green-400");
    }
  }, [data.status]);
  console.log(
    `bg-[${
      data.status === "On-Going" ? "#000" : main.primary
    }] rounded-b-xl w-full h-[20%] flex justify-center items-center`
  );
  return (
    <>
      <View
        style={main.shadows}
        className="bg-white w-full h-64 rounded-xl flex justify-center items-center"
      >
        <View className=" w-full h-[80%] flex justify-evenly items-center flex-row px-0.5">
          <View className=" w-[60%] h-[100%] flex justify-start items-start p-1 gap-0.5">
            <View className="flex flex-row justify-center items-center gap-x-2">
              <Image
                className="w-9 h-9"
                source={require("../assets/user.png")}
              />
              <Text className="text-bold font-black text-black">
                {data.user.name}
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center">
              <Image
                className="w-10 h-10"
                source={require("../assets/location.png")}
              />
              <Text
                className="text-bold font-black text-black w-[80%] "
                numberOfLines={5}
              >
                {data.user.location.address_formated}
              </Text>
            </View>
            <View className="flex justify-center items-center flex-row">
              <Image
                className="h-8 w-8"
                source={{
                  uri: "https://cdnl.iconscout.com/lottie/premium/thumb/blink-loader-4869101-4048002.gif",
                }}
              />
              <View
                style={main.shadows}
                className={`bg-${color} px-2 py-1 rounded-lg`}
              >
                <Text className="text-white font-black ">{data.status}</Text>
              </View>
            </View>
            <View className="flex justify-center items-center flex-row">
              <Image
                className="h-8 w-8"
                source={require("../assets/time.gif")}
              />
              <View
                style={main.shadows}
                className="bg-gray-100 px-2 py-1 rounded-lg"
              >
                <Text className="text-black font-black ">
                  {new Date(data.dateTime).toDateString()}
                </Text>
              </View>
            </View>
            <View className="flex justify-center items-center flex-row gap-x-1">
              <Image
                className="h-8 w-8"
                source={require("../assets/rupees.png")}
              />
              <View className="">
                <Text className="text-black font-black text-xl ">
                  {data.service.price.manupulated}
                </Text>
              </View>
            </View>
            <View></View>
          </View>
          <View className="w-[40%] h-full flex justify-evenly items-center ">
            <Text
              className="text-black font-black capitalize"
              numberOfLines={2}
            >
              {data.service.title}
            </Text>
            <Image
              className="w-[100%] h-[50%] rounded-xl"
              source={{ uri: data.service.images[0] }}
            />
            <View
              style={main.shadows}
              className="bg-gray-50 px-2 py-1 rounded-lg"
            >
              <Text className="text-black font-black capitalize ">
                {data.service.type.sub_category}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            refRBSheet.current.open();
          }}
          style={{
            backgroundColor:
              data.status === "On-Going" ? main.secondary : main.primary,
          }}
          className={`rounded-b-xl w-full h-[20%] flex justify-center items-center`}
        >
          <Text className="font-black text-white text-2xl">
            {data.status === "On-Going" ? "Continue Order" : "Accept Order"}
          </Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        height={200}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: main.primary,
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      >
        <View className="w-full h-[180px] px-2 flex justify-evenly items-center">
          <Text className="font-black text-gray-800 text-center ">
            By clicking the Button You will be Presented with the Map and with
            Customer House Location. You have to Go to The House Location with
            the help of Map
          </Text>
          <Text className="font-black text-gray-500 text-center ">
            Please Drive Safely :){" "}
          </Text>
          <Button
            func={() => {
              data.status !== "On-Going" && updateStatus(_id, "On-Going");
              navigation.replace("MapSP", {
                latitude: data.user.location.coordinates[1],
                longitude: data.user.location.coordinates,
                orderID: data.orderID,
                address: data.user.location.address_formated,
                name: data.user.name,
                phone_number: data.user.phone_number,
              });
            }}
            text="Continue"
          />
        </View>
      </RBSheet>
    </>
  );
};

export default Card;
