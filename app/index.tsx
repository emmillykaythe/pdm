import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View //div
      style={style.container} //fontWeigth: 'bold'
    >
      <Text>olá</Text>
      <Text>olá</Text>
      <Text>olá</Text>
      <Text>olá</Text>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // faz com que os texto fiquem um do lado do outro
    justifyContent: "center", //flex-start joga para esquerda 
    alignItems: "center",
  }}
)