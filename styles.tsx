import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // View Style
    basicView: { flex: 1, backgroundColor: "#f5f5f7" },
  


    // Main Section
    topView: { flex: 1, paddingTop: 70, paddingLeft: 30, paddingBottom: 20, },
    name: { fontSize: 35, fontWeight: 'bold', marginBottom: 3, },
    msg: { fontSize: 28, fontWeight: 'bold', },
  

    
    // Calender Section
    calender: { flexDirection: 'row', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 0, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopLeftRadius: 20, borderTopRightRadius: 20, },
   
    // Left View
    leftView: { flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 35, },
    // In Left View
    month: { fontSize: 30, fontWeight: 'bold', marginBottom: 10, },

    // Right View
    rightView: { flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginLeft: 20, marginRight: 30,  marginBottom: 10, }, 
    // In Right View
    dayView: { flex: 1, alignItems: 'center', justifyContent: 'center', },

    // Point
    point: { width: 50, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: '#E3E9FF', },
    pointText: { textAlign: 'center', color: '#4664cf', fontSize: 14, },
    // Today
    today: { textAlign: 'center', fontSize: 25, fontWeight: '500', marginTop: 5, marginBottom: 10, },
    todayCalender: { textAlign: 'center', fontSize: 15, },
    // Tomorrow
    tomorrow: { color: '#7d7d7d', textAlign: 'center', fontSize: 25, fontWeight: '500', marginTop: 5, marginBottom: 10, },
    tomorrowCalender: { color: '#7d7d7d', textAlign: 'center', fontSize: 15, },
  
    
    
    // All Section
    section: { flex: 1, height: 200, backgroundColor: '#fff', marginHorizontal: 20, paddingVertical: 30, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#efefef', },
  
    topTextView: { flex: 1, flexDirection: 'row', alignItems: 'center', },

    titleView: { flex: 3, flexDirection: 'row', alignItems: 'center', },
    titleText: { fontSize: 25, fontWeight: 'bold', },
    subTitleText: { fontSize: 17, marginLeft: 5 },

    btnView: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
    btnStyle: { marginLeft: 5 },

    // Todo Section
    todoView: { height: 250, },
    todo: { flex: 3, marginTop: 10, flexDirection: 'row', },

    // Memo Section
    memo: { flex: 3, backgroundColor: "#f5f5f7", marginTop: 10, borderRadius: 10, borderColor: '#efefef', borderWidth: .7, paddingVertical: 7, paddingHorizontal: 7, },

    // StudyPlanner Section
    spView: { borderBottomWidth: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, },
    studyPlanner: { flex: 3, marginTop: 30, },
});