import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface RadioGroupProps {
    selectedValue: string;
    onValueChange(value: string): void;
    color?: string;
    children: React.ReactNode
}

export default function RadioGroup(props: RadioGroupProps) {

    const [activeValue, setActiveValue] = useState(props?.selectedValue);

    useEffect(() => {
        props?.onValueChange(activeValue);
    }, [activeValue])


    const radioButtons = React.Children.map(props?.children, (radioButton: React.ReactNode, index: number) => {

        let isSelected = activeValue && radioButton?.props?.value == activeValue;

        const onPress = (value) => setActiveValue(value);

        return (
            <View style={{ flexDirection: 'row', padding: 5 }}>
                {
                    React.cloneElement(radioButton, {
                        index: index,
                        checked: isSelected,
                        onPress: onPress,
                        ...radioButton?.props,
                        ...props
                    })
                }
                {radioButton?.props?.children}
            </View>
        )
    })

    return (
        <View>
            {radioButtons}
        </View>
    )
}

const styles = StyleSheet.create({})