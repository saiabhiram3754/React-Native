// import { TextInput, View , Text, TouchableOpacity, FlatList} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { Slot } from "expo-router";
import "../../global.css";

// const properties = [
//   {id: 1, title: 'Modern Apartment', location: 'New York, NY', price: '$1,200,000'},
//   {id: 2, title: 'Cozy Cottage', location: 'Portland, OR', price: '$350,000'},
//   {id: 3, title: 'Luxury Villa', location: 'Los Angeles, CA', price: '$3,500,000'},
//   {id: 4, title: 'Downtown Condo', location: 'Chicago, IL', price: '$800,000'},
//   {id: 5, title: 'Beachfront Bungalow', location: 'Miami, FL', price: '$1,500,000'},
// ];


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return (
    // <SafeAreaView className ="flex: 1, padding: 16">
    //    <View className="padding: 16, font-bold">
    //         <Text>Hello, World!</Text>

    //         <TextInput 
    //         placeholder="Enter text here..." 
    //         placeholderTextColor="#999"
    //         style ={{
    //           borderWidth: 1,
    //           borderColor: '#ddd',
    //           borderRadius: 8,
    //           padding: 10,
    //           marginTop: 12,
    //         }}
    //         />

    //         <TouchableOpacity 
    //         onPress = {() => alert('Search button pressed!')}
    //         style ={{
    //           padding:10,
    //           alignItems: 'center',
    //           borderRadius: 8,
    //           backgroundColor: '#007bff',
    //           marginTop: 12
    //         }}
    //         >
    //           <Text style={{ color: 'white', fontWeight: 'bold' }}>Search</Text>
    //         </TouchableOpacity>

    //         <FlatList 
    //           data = {properties}
    //           keyExtractor={(item) => item.id.toString()}
    //           contentContainerStyle={{padding: 16}}
    //           renderItem={({item}) => (
    //             <View style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
    //               <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
    //               <Text style={{color: '#666'}}> {item.location}</Text>
    //               <Text style={{color: '#000'}}> {item.price}</Text>
    //             </View>
    //           )}
    //         />
    //       </View>
    // </SafeAreaView>

    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}
