import { Stack } from "expo-router"//Empilha as telas do app.

import {colors } from "@/styles/colors"

export default function Layout(){//Componete de rotasdo app.

    const backgroundColor = colors.gray[900];
    
    return (
        <Stack screenOptions={{
            headerShown: false,//oculta o cabeçalho padrão do stack.
            contentStyle: { backgroundColor },
        }}>
        </Stack>
    );
}