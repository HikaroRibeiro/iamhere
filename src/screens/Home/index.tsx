import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export default function Home() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de add')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Este usuário será removido: ${name}`)
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant
        name="Hikaro Ribeiro"
        onRemove={() => handleParticipantRemove('Hikaro')}
      />
      <Participant
        name="Bernardo Ribeiro"
        onRemove={() => handleParticipantRemove('Bernardo')}
      />
    </View>
  )
}
