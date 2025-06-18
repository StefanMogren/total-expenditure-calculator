import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// TabLayout håller koll på routerna i appen.
export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}>
			{/* Är en av navigationsknapparna i botten av appen */}
			{/* "<Tabs>"" verkar vara en defaultgrej som React Native använder. */}
			<Tabs.Screen
				// "name='index'" är det som letar upp Reactsidan i samma mapp. Specifikt index.tsx
				name='index'
				options={{
					// Texten till navigationsknappen
					title: "HomeHouse",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='house.fill' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: "ExploreAirPlane",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='paperplane.fill' color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
