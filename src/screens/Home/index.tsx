import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'
import { useEffect, useState } from 'react'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  useEffect(() => {}, [setParticipants])

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existente.',
        'Este participante já consta na lista.',
      )
    }
    if (participantName === '') {
      return Alert.alert('Campo vazio', 'Informe um nome.')
    }
    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Excluido'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Volta Redonda</Text>
      <Text style={styles.eventDate}>08 de Fevereiro de 2025</Text>
      <View style={styles.form}>
        <TextInput
          id="txtInput"
          style={styles.input}
          placeholder="Insira seu nome aqui."
          placeholderTextColor="#6B6B6B"
          keyboardType="email-address"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém na lista de presença, adicione algum convidado.
          </Text>
        )}
      />
    </View>
  )
}
