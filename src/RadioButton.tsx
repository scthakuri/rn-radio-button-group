import React from 'react'
import {
    StyleSheet,
    View,
    StyleProp,
    viewStyle,
    TouchableWithoutFeedback
} from 'react-native';

interface RadioProps {
    value : string;
    disabled? : boolean;
    onPress?(value): void;
    color? : string;
    unCheckColor? : string;
    size?: number;
    thickness?: number;
    style?: StyleProp<viewStyle>;
    checked?: boolean;
    children?:React.ReactNode
}

export default function RadioButton({ 
    size = 20, 
    thickness = 1, 
    disabled, 
    style,
    value,
    onPress, 
    checked = false, 
    color = "#999",
    unCheckColor = "#999"
}: RadioProps) {
    return (
        <View style={[style, { opacity: disabled ? 0.4 : 1 }]}>
            <TouchableWithoutFeedback
                disabled={disabled}
                onPress={() => onPress(value)}
            >
                <View style={[styles.radio, {
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                    borderWidth: thickness,
                    borderColor: checked ? color : unCheckColor,
                }]}>
                    {checked ? <View style={{
                        height: size / 2,
                        width: size / 2,
                        borderRadius: size / 4,
                        backgroundColor: color,
                    }} /> : null}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})