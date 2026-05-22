import { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { loadNotes, saveNotes } from '../storage/notesStorage';

export default function EditNoteScreen({ route, navigation }) {
  const existingNote = route.params?.note;

  const [title, setTitle] = useState(existingNote?.title || '');
  const [body, setBody] = useState(existingNote?.body || '');

  const saveNote = async () => {
    const notes = await loadNotes();

    if (existingNote) {
      const updated = notes.map((note) =>
        note.id === existingNote.id
          ? { ...note, title, body }
          : note
      );

      await saveNotes(updated);
    } else {
      const newNote = {
        id: Date.now().toString(),
        title,
        body,
      };

      await saveNotes([newNote, ...notes]);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Write your note..."
        style={styles.bodyInput}
        value={body}
        onChangeText={setBody}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  bodyInput: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});