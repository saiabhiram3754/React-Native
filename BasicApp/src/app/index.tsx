// import { Redirect } from "expo-router";
// import { Text, TextInput, View } from "react-native";

// export default function Index() {

//   return <Redirect href="/(root)/(tabs)" />;

//   // return (
//   //   <View style= {{padding :16}}>
//   //     <Text>Hello, World!</Text>

//   //     <TextInput placeholder="Enter text here..." placeholderTextColor="#999" />
//   //   </View>
//   // );
// }

import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function Index() {
  const { isSignedIn, isLoaded} = useAuth();

  if (!isLoaded) {
    return null; // or a loading indicator
  }

  if (!isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }
  
  return <Redirect href="/sign-in" />;
}