import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = 'NOTES_APP_DATA';

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.log('Save error:', error);
  }
};

export const loadNotes = async () => {
  try {
    const data = await AsyncStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Load error:', error);
    return [];
  }
};