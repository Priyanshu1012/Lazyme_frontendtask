import React from "react";
import { View, Text, StyleSheet, Image, FlatList,Dimensions,TextInput,ScrollView ,Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { add } from "react-native-reanimated";
import LinearGradient from 'react-native-linear-gradient';

export default class DateTimescreen extends React.Component {
  constructor(){
      super()
      this.state={
          data:['8 AM','9 AM','10 AM'],
          checked:0,
          address:'',
          chosenstdate: '',
          isfirstVisible: false,
          stvisible: false,
          restaurant_name: '',
          timeslot:'',
          search: '',
          mealtype:''
      }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const post = navigation.getParam('object');
    this.setState({restaurant_name:post.restaurant_name,mealtype:post.mealtype})
  }

handle_stPicker = (datetime) => {
    this.setState({
      isfirstVisible: false,
      chosenstdate: moment(datetime).format('DD MMMM YYYY HH:mm'),
      stvisible: true
    })
  }
  show_stPicker = () => {
    this.setState({
      isfirstVisible: true
    })
  } 

  hide_stPicker = () => {
    this.setState({
      isfirstVisible: false,
    })
  }


  onSelect(keynum,dataname){
      this.setState({checked:keynum,timeslot:dataname})
      console.log(dataname)
  }

  onNext(date,time,address){
      var material = {'date':date,'time':time,'address':address,'restaurant':this.state.restaurant_name,'mealtype':this.state.mealtype}
      this.props.navigation.navigate('Cartscreen',{material})
  }

  render() {
    return (
  
        <View style={styles.container}>
            <LinearGradient colors={['#B48EC4','#ffc0cb','white','#ffc0cb','#B48EC4' ]} 
          style={{flex: 1}} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
          >
            <ScrollView>
            <Text style={{fontWeight:'bold',fontSize:25,margin:25}}>Select Time Slot</Text>
           {
               this.state.data.map((data,key)=>{
                   return(
                       <View style={{flexDirection:'row',marginLeft:20}}>
                           {this.state.checked==key?
                           <TouchableOpacity style={styles.btn}>
                               
                               <Image style={styles.img} source={{uri: 'https://img.pngio.com/the-radio-button-group-svg-png-icon-free-download-388528-radio-button-png-980_980.png'}}/>
                               <Text>{data}</Text>
                           </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>{this.onSelect(key,data)}} style={styles.btn}>
                        <Image style={styles.img}  source={{uri: 'https://image.flaticon.com/icons/png/512/24/24189.png'}}/>
                               <Text>{data}</Text>
                         </TouchableOpacity>

                        
                    }
                       </View>
                   )
               })
           }
           <Text style={{fontWeight:'bold',fontSize:25,margin:25}}>Select Date</Text>
           <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{backgroundColor:'#FFF3FA',borderWidth:1,padding:10,width:90,marginLeft:10,height:40,borderRadius:20,alignItems:'center'}}>
                   <Text>Daily</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:'#FFF3FA',borderWidth:1,padding:10,width:140,marginLeft:10,height:40,borderRadius:20,alignItems:'center'}}>
                   <Text>Alternate Day</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:'#FFF3FA',borderWidth:1,padding:10,width:90,marginLeft:10,height:40,borderRadius:20,alignItems:'center'}}>
                   <Text>Weekly</Text>
               </TouchableOpacity>
          
           </View>
           <View style={{alignItems:'center'}}>
          <Icon name="calendar-alt" size={200} color='#75B06F' style={{marginTop:20}} onPress={this.show_stPicker}/>
          </View>
          <DateTimePickerModal
            isVisible={this.state.isfirstVisible}
            onConfirm={this.handle_stPicker}
            onCancel={this.hide_stPicker}
            mode={'datetime'}
            is24Hour={false}
          />
          { this.state.stvisible ?
          <Text style={{fontSize:25,color:'#000000',textAlign:'center',fontFamily:'Tangerine-Bold'}}>
                {this.state.chosenstdate}
          </Text> :null
          }

           <Text style={{fontWeight:'bold',fontSize:25,margin:25}}>Select Address</Text>
           <View style={{alignItems:'center'}}>
           <TextInput
          placeholder="Address"
          placeholderTextColor='black'
          autoCapitalize="none"
          onChangeText={(search) => this.setState({search})}
          value={this.state.search}
          style={styles.searchBar}
        />
        <TouchableOpacity onPress={() => {this.onNext(this.state.chosenstdate,this.state.timeslot,this.state.search)}}>
          <View style={{width:'50%',borderWidth:3,backgroundColor:'#DCDCDC',borderRadius:25,margin:10}}>
            <Text style={{ marginLeft:70,color: '#000000',fontWeight: 'bold',textAlign:'center',margin:15,marginRight:70}}>Next</Text>
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
    img: {
        height:20,
        width:20,
        marginRight:10
    },
    searchBar: {
        fontSize: 16,
        margin: 10,
        width: '95%',
        borderWidth:0.5,
        height: 40,
        backgroundColor: 'white',
        color:'#000000'
      },
    btn:{
        flexDirection:'row',
        margin:5
    },
    textInput: {
        height: 45,
        width: '80%',
        borderColor: '#FCBE42',
        borderWidth: 1,
        marginBottom: 30,
        color: '#fff',
        borderRadius:15,
     },
});
