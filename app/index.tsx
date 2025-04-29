import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Emmilly",
    cargo: "Integrador"
  }, //{}objetos
  {
    id: 2,
    nome: "Kaythe",
    cargo: "Integrador"
  }
];

export default function Index() {
  return (
    <View //div
      style={style.container} //fontWeigth: 'bold' ou style.container
    >
     { 
     usuarios.map (item => ( 
      <Text style ={{fontSize:20}}>{item.nome}</Text>
     ))
     }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row', // faz com que os texto fiquem um do lado do outro
    justifyContent: "center", //flex-start joga para esquerda 
    alignItems: "center",
  }}

)