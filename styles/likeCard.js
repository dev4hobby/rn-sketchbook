import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
  card:{
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  },
  buttonGroup: {
      flexDirection:"row",
  },
  button:{
      width:'auto',
      minWidth:30,
      marginRight:10,
      marginLeft:10,
      padding:10,
      borderWidth:1,
      borderColor:'deeppink',
      borderRadius:7
  },
  buttonText:{
      color:'deeppink',
      textAlign:'center'
  }
});

export default styles;
