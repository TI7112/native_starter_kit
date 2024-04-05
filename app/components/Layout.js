import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Layout = ({children}) => {
    return (
      <ScrollView className="w-full min-h-full bg-zinc-900">
        <View className="h-[31px] w-full bg-zinc-100"></View>
        {children}
      </ScrollView>
    )
}

export default Layout
