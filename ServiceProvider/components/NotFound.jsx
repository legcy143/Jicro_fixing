import { View, Text, Image } from 'react-native'
import React from 'react'

const NotFound = ({text, component}) => {
  return (
    <View className="w-full h-screen bg-white flex justify-center items-center p-3" >
        <Image className="w-52 h-44" source={require("../assets/nothing.gif")} />
        <Text className="text-2xl font-black text-black" > {text} </Text>
        {component && component}
    </View>
  )
}

export default NotFound