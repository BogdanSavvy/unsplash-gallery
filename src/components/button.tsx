import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type MainButtonProps = {
  title: string;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const MainButton = ({
  title,
  onPress,
  children,
  disabled,
  style,
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#ffff',
  },
});

export default MainButton;
