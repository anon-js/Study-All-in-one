import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, Platform, Animated, PanResponder, Alert } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * .6;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * .1;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWORD_TRANSLATE_Y = 0; 
const DRAG_THRESHOLD = 50;

type childrenProps = {
    children: any,
}

const BottomSheet: React.FC<childrenProps> = ({children}) => {
    
    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastGestureDy = useRef(0);
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                animatedValue.setOffset(lastGestureDy.current);
            },
            onPanResponderMove: (e, gesture) => {
                animatedValue.setValue(gesture.dy);
            },
            onPanResponderRelease: (e, gesture) => {
                animatedValue.flattenOffset();
                lastGestureDy.current += gesture.dy;

                if (gesture.dy > 0) {
                    if (gesture.dy <= DRAG_THRESHOLD) {
                        springAnimation('up');
                    } else {
                        Alert.alert(
                            "메모 작성",
                            "작성을 그만 하실건가요?",
                            [
                                {
                                    text: "네",
                                    onPress: () => springAnimation('down') },
                                {
                                    text: "아니요",
                                    onPress: () => springAnimation('up'),
                                    style: "cancel"
                                },
                            ],
                            { cancelable: false }
                        );
                    }
                } else {
                    if (gesture.dy >= -DRAG_THRESHOLD) {
                        Alert.alert(
                            "메모 작성",
                            "작성을 그만 하실건가요?",
                            [
                                {
                                    text: "네",
                                    onPress: () => springAnimation('down') },
                                {
                                    text: "아니요",
                                    onPress: () => springAnimation('up'),
                                    style: "cancel"
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        springAnimation('up');
                    }
                }
            },
        })
    ).current;

    const springAnimation = (direction: 'up' | 'down') => {
        lastGestureDy.current = direction === 'down' ? MAX_DOWNWORD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y,
        Animated.spring(animatedValue, {
            toValue: lastGestureDy.current,
            useNativeDriver: true,
        }).start();
    }
    
    const bottomSheetAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWORD_TRANSLATE_Y],
                    outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWORD_TRANSLATE_Y],
                    extrapolate: 'clamp',
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
                <View style={styles.draggableArea} {...panResponder.panHandlers}>
                    <View style={styles.dragHandle}/>
                </View>
                <View style={styles.bottomSheetChildren}>
                    {children}
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        height: BOTTOM_SHEET_MAX_HEIGHT,
        bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
        ...Platform.select({
            android: { elevation: 3 },
            ios: {
                shadowColor: '#a8bed2',
                shadowOpacity: 1,
                shadowRadius: 6,
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
            },
        }),
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    draggableArea: {
        width: 132,
        height: 32,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dragHandle: {
        width: 100,
        height: 6,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
    },
    bottomSheetChildren: {
        padding: 20,
    }
});

export default BottomSheet;