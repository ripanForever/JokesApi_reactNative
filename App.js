import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Container,
  Button,
  Header,
  Card,
  CardItem,
  Text,
  Body,
  Spinner
} from 'native-base';

import axios from 'axios'

const App=()=>{

  const [joke, setJoke] = useState("")  

  const fetchJokes= async ()=>{
    try {
      const {data}= await axios.get("https://api.chucknorris.io/jokes/random");
      const joke=data;


      setJoke(joke)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
  fetchJokes();
  }, [])

  if(!joke)
  {
    return(
      <Container style={styles.container}>
        <Spinner style={{alignSelf:"center",color:"#00b7c2"}}/>
      </Container>
    )
  }
  else{
    return(
      <Container style={styles.container}>
        <Card style={styles.card}>
          <CardItem bordered header >
              <Text>Jokes</Text>
          </CardItem>
          <CardItem bordered>
                <Body>
                  <Text>
                    {joke.value}
                  </Text>
                </Body>
              </CardItem>
        </Card>
        <Button style={styles.button} onPress={()=>fetchJokes()}>
          <Text>Next Joke</Text>
        </Button> 
      </Container>
    )
  }
  
}
export default App;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  }
})