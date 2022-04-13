import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles  from './styles';
import colors from '../../../assets/theme/colors';
// import AntDesign from 'react-native-vector-icons/AntDesign';/


const Input = ({onChangeText, icon, iconPosition, style, value, label, error, iconType, ...props}) => {
    const [focused, setFocused] = React.useState(false);

    const getFlexDirection = () => {
        if (icon && iconPosition) {
          if (iconPosition === 'left') {
            return 'row';
          } else if (iconPosition === 'right') {
            return 'row-reverse';
          }
        }
      };
    
      const getBorderColor = () => {
        if (error) {
          return colors.danger;
        }
        if (focused) {
          return colors.primary;
        } else {
          return colors.grey;
        }
      };

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label} </Text>}

            <View style={[
              styles.wrapper,
              {alignItems: icon ? 'center' : 'baseline'},
              {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
            ]}>

              {/* <View>
                <AntDesign name={iconType} fontSize={25} color="#666" />
              </View> */}

              <View>{icon && icon}</View>

              <TextInput
                style={[styles.textInput, style]}
                onChangeText={onChangeText}
                value={value}
                onFocus={() => {
                  setFocused(true);
                }}
                onBlur={() => {
                  setFocused(false);
                }}
                {...props}
              />
            </View>    

            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;