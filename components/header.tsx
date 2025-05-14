
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';


export const Header = ({image}: ImageSourcePropType) => {
    return(
        <View style={styles.background}>
            <Text></Text>
            <Text></Text>
            <Image source={image}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    background:{
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30

    }
})