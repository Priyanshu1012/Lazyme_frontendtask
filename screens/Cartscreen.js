import React from "react";
import { View, Text, StyleSheet, Image, FlatList,Dimensions,TextInput,ScrollView ,Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from 'react-native-linear-gradient';
export default class Cartscreen extends React.Component {
  constructor(){
      super()
      this.state={
          date:'',
          Address:'',
          timeslot:'',
          meal: '',
          mealtype: ''
      }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const material = navigation.getParam('material');
    console.log(material)
    this.setState({
    date: material.date,
    Address: material.address,
    timeslot:material.time,
    meal : material.restaurant,
    mealtype: material.mealtype
})
  }


  render() {
    return (
        <View style={styles.container}>
            
            <LinearGradient colors={['#B48EC4','white','black','black','white','#B48EC4' ]} 
          style={{flex: 1}} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
          >
              <ScrollView>
            <Text style={{fontWeight:'bold',fontSize:25,margin:25,textAlign:'center'}}>Cart</Text>
            <View style={{backgroundColor:'#FFEDDA',borderWidth:2,height:150,flexDirection:"column",margin:7,marginVertical:15}}>
                <Text style={styles.boldtext}>Delivery Date & Time</Text>
                <Text style={styles.text}>{this.state.date}</Text>
                <Text style={styles.text}>{this.state.timeslot}</Text>
            </View>

            <View style={{backgroundColor:'#FFEDDA',borderWidth:2,height:150,flexDirection:"column",margin:7}}>
                <Text style={styles.boldtext}>Delivery Address</Text>
                <Text style={styles.text}>{this.state.Address}</Text>
            </View>

            <View style={{backgroundColor:'#FFF3FA',borderWidth:2,flexDirection:"column",margin:7}}>
                <View style={{flexDirection:'row'}}>
                   <Text style={styles.boldtext}>Item</Text>
                   <View style={{marginLeft:180,flexDirection:'row',margin:10,borderWidth:1,height:30,width:80,alignItems:'center',justifyContent:'space-between'}}>
                       <Text style={{fontSize:18,margin:4}}>+</Text>
                       <Text style={{fontSize:18,margin:4}}>1</Text>
                       <Text style={{fontSize:18,margin:4}}>-</Text>
                   </View>
                </View>
                

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>{this.state.meal}</Text>
                    <Text style={{fontSize:18,textAlign:'right',marginLeft:100}}>Rs.180</Text>
                </View>
                <Text style={styles.text}>{this.state.mealtype}</Text>

                <View  style={{marginTop:160,flexDirection:'row',marginLeft:200}}>
                   <Text style={{fontSize:18}}>Total        </Text>
                   <Text style={{fontSize:18}}>Rs.180</Text>
                </View>
            </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity>
          <View style={{borderWidth:3,backgroundColor:'#DCDCDC',borderRadius:40,margin:10}}>
            <Text style={{fontSize:18, marginLeft:100,color: '#000000',fontWeight: 'bold',textAlign:'center',margin:15,marginRight:100}}>Pay</Text>
            </View>
            </TouchableOpacity> 
            </View>
            </ScrollView>
          </LinearGradient>
          </View>
        
        
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    boldtext: {
        fontWeight:'bold',
        fontSize:18,
        marginLeft:20,
        margin:10
    },
    text: {
        fontSize:18,
        marginLeft:20,
        marginBottom:10
        
    }
});
