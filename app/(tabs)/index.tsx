import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!res.canceled) {
      setSelectedImage(res.assets[0].uri);
    } else {
      alert("画像を選択してください");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="画像を選択" onPress={pickImage} />
        <Button label="画像を使用" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
