import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NoteCard({ note, onPress, onDelete }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{note.title}</Text>

      <Text numberOfLines={2} style={styles.preview}>
        {note.body}
      </Text>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  preview: {
    marginTop: 8,
    color: '#555',
  },
  delete: {
    marginTop: 12,
    color: 'red',
    fontWeight: '600',
  },
});