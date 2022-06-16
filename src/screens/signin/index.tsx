import React, { useState } from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
	const windowWidth = Dimensions.get("window").width;
	console.log("width:", windowWidth);
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle={"light-content"}
				backgroundColor="transparent"
				translucent
			/>
			<Image
				resizeMode={"stretch"}
				source={IllustrationImg}
				style={styles.image}
			/>

			<View style={styles.content}>
				<Text style={styles.title}>
					Conecte-se {"\n"}e organize suas {"\n"}jogatinas
				</Text>
				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {"\n"}
					favoritos com seus amigos
				</Text>
				<ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
			</View>
		</View>
	);
}
