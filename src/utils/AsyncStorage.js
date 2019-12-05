import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log('error storeData: ', e.message);
    }
};

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value;
    } catch(e) {
        console.log('error getData: ', e.message);
    }
};

export const printAsyncStorage = () => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            console.log('key value pair ', { [store[i][0]]: store[i][1] });
            return true;
          });
        });
    });
}