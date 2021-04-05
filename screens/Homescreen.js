import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image, FlatList,Dimensions,TextInput, Picker,ScrollView,Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const data= [
  {
    id: '1',
    restaurant_name: 'Swad Restuarant',
    image: 'http://4.bp.blogspot.com/-rusiFRzM624/U8VIIaM_wgI/AAAAAAAABJw/B6AMb8-fDsQ/s1600/restaurant.jpg',
    meal1:'pizza',
    meal2:'burger',
  },
  {
    id: '2',
    restaurant_name: 'Richel Restaurant',
    image: 'https://getsling.com/wp-content/uploads/2019/11/pasted-image-0-18.png',
    meal1:'Dosa',
    meal2:'Oreo shake'
  },
];

export default class Homescreen extends React.Component {
  state={
    selectedValue: '',
  }
  onNext(object){
      console.log(object)
      object.mealtype=this.state.selectedValue
      console.log(object)
      this.props.navigation.navigate('DateTimescreen',{object})
  }
  renderPost = post => {
    return (
        <View style={styles.feedItem}>
                
                <Image source={{ uri:post.image}} style={styles.postImage} resizeMode="cover" />
                <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18,fontWeight:'bold',marginVertical:10}}>{post.restaurant_name}</Text>
                <Picker
        selectedValue={this.state.selectedValue}
        style={{ height: 50, width: 160 }}
        onValueChange={(itemValue, itemIndex) => this.state.selectedValue=itemValue}
      >
        <Picker.Item label="Show meals" value="" />
        <Picker.Item label= {post.meal1} value={post.meal1} />
        <Picker.Item label={post.meal2} value={post.meal2} />
      </Picker>
      <TouchableOpacity onPress={() => {this.onNext(post)} }>
          <View style={{width:80,borderWidth:3,backgroundColor:'#000000',borderRadius:8}}>
            <Text style={{ color: '#2cd18a',fontWeight: 'bold',textAlign:'center'}}>Next</Text>
            </View>
            </TouchableOpacity> 
      </View>

        </View>
    );
};


  render() {
    return (
  
        <View style={styles.container}>
           
         <ScrollView>
            <Image
          style={styles.recommend}
          source={{uri: 'https://www.posist.com/restaurant-times/wp-content/uploads/2016/07/restaurant-449952_1280-800x533.jpg'}}/>
          <View style={{backgroundColor:'#D7FDFD',borderWidth:2,height:150,flexDirection:"row",margin:7,marginVertical:15,alignItems:"center"}}>
            <View style={styles.box}><Text>BREAKFAST</Text></View>
            <View style={styles.box}><Text>LUNCH</Text></View>
            <View style={styles.box}><Text>DINNER</Text></View>
          </View>
         
          <View style={{borderWidth:2,flexDirection:"column",margin:7,backgroundColor:'#FFDAED'}}>
          <TextInput
          placeholder="Search"
          placeholderTextColor='black'
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
      
    
           <View style={styles.restaurant}>
              <FlatList 
                    data={data}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
          
          </View>
          </ScrollView>
         
          </View>
        
        
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
        
    },
    recommend: {
      width: '100%',
      height: 220,
      borderRadius: 0,
      borderWidth:5
    },
    feedItem: {
      backgroundColor: "#FFF",
      padding: 1,
      flexDirection: "row",
      borderWidth:1,
      margin:5
  },
    box: {
      borderWidth: 2,
      backgroundColor:'#FFFF9A',
      margin:5,
      width:"30%",
      height:"45%",
      justifyContent: "center", 
      alignItems: "center"
    },
    searchBar: {
      fontSize: 20,
      margin: 10,
      width: '95%',
      borderWidth:0.5,
      height: 50,
      backgroundColor: 'white',
    },
    restaurant: {
      width: "98%",
      margin:5
    },
  postImage: {
    width: '40%',
    height: 120,
    borderRadius: 5,
    margin: 5,
    marginRight:20
},

});
