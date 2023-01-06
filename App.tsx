import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Main from './sections/Main'
import CalenderSection from './sections/CalenderSection';
import TodoSection from './sections/TodoSection';
import MemoSection from './sections/MemoSection';
import StudyPlannerSection from './sections/StudyPlannerSection';
import styles from './styles';

const App = () => {
  return (
      <SafeAreaView style={[ styles.basicView, { backgroundColor: "#ffffffff" } ]}>
        <ScrollView style={ styles.basicView }>
          <Main name="민호" msg="오늘 하루도 화이팅!" />
          <CalenderSection />
          <TodoSection />
          <MemoSection />
          <StudyPlannerSection />
        </ScrollView>
      </SafeAreaView>
  )
}

export default App;