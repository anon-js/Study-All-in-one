import React from 'react';
import { StatusBar } from 'react-native';
import Main from './sections/Main'
import CalenderSection from './sections/CalenderSection';
import TodoSection from './sections/TodoSection';
import MemoSection from './sections/MemoSection';
import StudyPlannerSection from './sections/StudyPlannerSection';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components/native';
import BottomSheet from './components/BottomSheet';
import { BottomSheetText } from './styles';

const FullScreenArea = styled.View`
    flex: 1;
    background: #f5f5f7;
`

const SafeArea = styled.SafeAreaView`
    background: #f5f5f7;
`

const SectionScroll = styled.ScrollView`
    background: #f5f5f7;
`

const App = () => {
    return (
        <RecoilRoot>
            <FullScreenArea>
                <StatusBar barStyle='dark-content' backgroundColor='#f5f5f7'/>
                <SafeArea>
                    <SectionScroll>
                        <Main name='민호' msg='반가워요! 👋'/>
                        <CalenderSection />
                        <TodoSection />
                        <MemoSection />
                        <StudyPlannerSection />
                    </SectionScroll>
                </SafeArea>
                <BottomSheet>
                    <BottomSheetText>안녕하세요</BottomSheetText>
                </BottomSheet>
            </FullScreenArea>
        </RecoilRoot>
    )
}

export default App;