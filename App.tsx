import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Main from './sections/Main'
import CalenderSection from './sections/CalenderSection';
import TodoSection from './sections/TodoSection';
import MemoSection from './sections/MemoSection';
import StudyPlannerSection from './sections/StudyPlannerSection';
import styles from './styles';
import { RecoilRoot } from 'recoil';

const App = () => {
    return (
        <RecoilRoot>
            <StatusBar barStyle='dark-content'></StatusBar>
            <SafeAreaView style={[ styles.basicView, { backgroundColor: "#f5f5f7" } ]}>
                <ScrollView style={[ styles.basicView ]}>
                    <Main name="민호" msg="오늘 하루도 화이팅!" />
                    <CalenderSection />
                    <TodoSection />
                    <MemoSection />
                    <StudyPlannerSection />
                </ScrollView>
            </SafeAreaView>
        </RecoilRoot>
    )
}

export default App;