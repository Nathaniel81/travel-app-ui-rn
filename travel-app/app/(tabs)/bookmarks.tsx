import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Bookmarks = () => {
	return (
		<View style={styles.container}>
			<Text>Bookmark</Text>
		</View>
	)
}

export default Bookmarks;

const styles =  StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
