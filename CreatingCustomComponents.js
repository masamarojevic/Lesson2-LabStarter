import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  
} from "react-native";
import { styles } from "../styles";


/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

/* Set labPart variable to 5, to view this part of the lab */
const CartItemMilk = ({shop,counter,setCounter,title}) => {
    
  return(

    <View style ={{  backgroundColor:"yellow"}}>
      <Text>{shop}</Text>
      <Text>{title}</Text>
      <Button title="+"
      onPress={() => setCounter((prevCounter =>  setCounter (counter + 1) ))}/>
      <Button title="-"
      onPress={() => setCounter((prevCounter => setCounter (counter - 1) ))}/>

    </View>
  );

}
const CartItemEggs =({shop,counter1,setCounter1,title})=> {
  return(
    <View style ={{  backgroundColor:"yellow"}}>
      <Text>{shop}</Text>
      <Text>{title}</Text>
      <Button title="+"
      onPress={() => setCounter1((prevCounter1 =>  setCounter1 (counter1 + 1) ))}/>
      <Button title="-"
      onPress={() => setCounter1((prevCounter1 => setCounter1 (counter1 - 1) ))}/>

    </View>
  )
}
const CartItemBread =({shop,counter2,setCounter2,title})=> {
  return(
    <View style ={{  backgroundColor:"yellow"}}>
      <Text>{shop}</Text>
      <Text>{title}</Text>
      <Button title="+"
      onPress={() => setCounter2((prevCounter2 =>  setCounter2 (counter2 + 1) ))}/>
      <Button title="-"
      onPress={() => setCounter2((prevCounter2 => setCounter2 (counter2 - 1) ))}/>

    </View>
  )
}
const TotalAmount =({counter,counter1,counter2,shop}) => {
  let TotalAmountItem=counter+counter1+counter2;
  return(
    <Text>total amount of items :  {TotalAmountItem}</Text>
    
  )
}
export default function CreatingCustomComponents() {
  const[counter,setCounter]= useState(0)//milk
  const[counter1,setCounter1]=useState(0)//egss
  const[counter2,setCounter2]=useState(0)//bread
  
  shop={milk: counter, eggs: counter1, bread: counter2};
  
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            
            <CartItemMilk title="Milk"shop ={shop.milk} counter={counter} setCounter={setCounter}/> 
            <CartItemEggs title="Eggs"shop={shop.eggs} counter1={counter1} setCounter1={setCounter1}/>
            <CartItemBread title="Bread"shop={shop.bread}counter2={counter2} setCounter2={setCounter2}/>
 
          </Text>
          <TotalAmount counter={counter} counter1={counter1} counter2={counter2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
