import React from "react";
import MemoButton from "../components/MemoButton";
import { SectionView } from '../styles';
import { TitleBar } from "../Views/TitleBar";


const MemoSection = () => {
    return (
        <SectionView>
            <TitleBar title="메모" btnTitle="메모 추가" onPress={() => {null}} />
            <MemoButton text={ "대파 2단\n양파 한 봉지\n깻잎 싼거 하나\n케찹 오뚜기" } onPress={() => {

            }}/>
        </SectionView>
    );
}

export default MemoSection;