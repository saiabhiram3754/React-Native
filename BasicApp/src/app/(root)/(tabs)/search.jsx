import {View, Text} from "react-native";    
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search(){
    return (
        <SafeAreaView>
             <View style={{padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16}}> 
                  <Text>Search</Text>
             </View>
        </SafeAreaView>
    )
}