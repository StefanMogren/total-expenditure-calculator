import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			{/* 
			Så som det stod innan jag skapade "(tabs)"-mappen.
			<Stack.Screen name='index' options={{ title: "Home" }} />
			<Stack.Screen name='about' options={{ title: "About" }} /> */}
		</Stack>
	);
}
