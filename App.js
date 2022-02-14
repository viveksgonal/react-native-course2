import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

//Section 2 Model
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
//Section 2 Flex box
// export default function App() {
//   return (
//     <View
//       style={{
//         padding: 50,
//         flexDirection: 'row',
//         width: '80%',
//         height: 300,
//         justifyContent: 'space-around',
//         alignItems: 'stretch',
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: 'red',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           flex:1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }

//Section: 2 Styles
// export default function App() {
//   return (
//     <View style={{ padding: 50 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <TextInput
//           placeholder=" Course Goal"
//           style={{
//             width: '80%',
//             borderColor: "black",
//             borderWidth: 1,
//             padding: 1,
//           }}
//         />
//         <Button title="Add" />
//       </View>
//       <View></View>
//     </View>
//   );
// }
