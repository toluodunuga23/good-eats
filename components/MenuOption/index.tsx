import { TouchableOpacity, StyleSheet , View } from 'react-native';
import { ReactNode } from 'react';

export const MenuOption = ({
  onSelect,
  children,
}: {
  onSelect: () => void;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.menuOption}>
      {children}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      position: "relative",
    },
    menu: {
      position: 'relative',
      width: 80,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    menuOption: {
      padding: 5,
    },
  });