import React from 'react'
import { Text, View } from 'react-native'
import Layout from '../components/Layout'

const Hello = () => {
  return (
    <Layout>
      <View className="px-6 py-4 flex-row justify-center items-center min-h-screen">
        <Text className="text-white text-4xl font-bold">Hello TI</Text>
      </View>
    </Layout>
  )
}
export default Hello
