import AsyncStorage from "@react-native-async-storage/async-storage";
import { ObjectData } from "../api/client";

export async function saveMyPackage(data: ObjectData){
  let content = await AsyncStorage.getItem('@my/packages') || '[]';
  let objects = JSON.parse(content).filter((o: ObjectData) => o.codObjeto != data.codObjeto);
  objects.push(data);
  AsyncStorage.setItem('@my/packages', JSON.stringify(objects));
}

export async function fetchMyPackages(): Promise<ObjectData[]> {
  let content = await AsyncStorage.getItem('@my/packages') || '[]';
  return JSON.parse(content);
}
