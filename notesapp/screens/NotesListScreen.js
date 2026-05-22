import { useCallback, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import NoteCard from '../components/NoteCard';
import { loadNotes, saveNotes } from '../storage/notesStorage';

export default function NotesListScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const storedNotes = await loadNotes();
    setNotes(storedNotes);
  };

  useFocusEffect(
  useCallback(() => {
    fetchNotes();
  }, [])
);

  const deleteNote = async (id) => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
    await saveNotes(updated);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onPress={() =>
              navigation.navigate('EditNote', {
                note: item,
              })
            }
            onDelete={() => deleteNote(item.id)}
          />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('EditNote')
        }
      >
        <Text style={styles.buttonText}>+ New Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  button: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});