import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './page-components/Header';
import HomePage from './pages/HomePage';
import { setWorldOriginAsync } from 'expo/build/AR';

export default function App() {
  const [nextText, setNextText] = useState('Don\'t Worry, Be Happy');
  const [author, setAuthor] = useState('')
  var Quotes =[
    {quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", author: "John Quincy Adams"}, 
  {quote:"Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
  {quote:"Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals.", author: ""}, 
  {quote:"The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.", author: "John Maxwell"},
  {quote:"Leadership and learning are indispensable to each other.", author: "John F. Kennedy"},
  {quote:"There are only two ways to influence human behavior: you can manipulate it or you can inspire it", author: "Simon Sinek"},
  {quote:"People don’t buy WHAT you do, they buy WHY you do it.", author: "Simon Sinek"},
  {quote:"You don’t hire for skills, you hire for attitude. You can always teach skills.", author: "Simon Sinek"},
  {quote:"You can easily judge the character of a person by how he/she treats those who can do nothing for him/her.", author: "Simon Sinek (with some modification by Dev. Man to Person, She along with he and her along with him"},
  {quote:"The role of a leader is not to come up with all the great ideas. The role of a leader is to create an environment in which great ideas can happen.", author: "Simon Sinek"}
  ];
  const wordsOfWisdomHandler = actionId => {
      Quote = Quotes[Math.floor(Math.random()*Quotes.length)];
      setNextText(Quote.quote); 
      setAuthor(Quote.author);

  }
  return (
    <View style={styles.container}>
      <Header title="Infinite Game" />
      <HomePage title={nextText} author={author} onClick={wordsOfWisdomHandler} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
