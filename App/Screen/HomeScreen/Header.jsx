import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Screen/LoginScreen/Utils/Colors';

export default function Header({ onFilterChange }) {
  const { user } = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilter = (type) => {
    setModalVisible(false);
    if (onFilterChange) {
      onFilterChange(type); // call parent function to sort items
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }}
        style={{ width: 45, height: 45, borderRadius: 99 }}
      />

      <Image source={require('./../../../assets/images/logo.png')}
        style={{ width: 200, height: 45, resizeMode: 'contain' }}
      />

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome name="filter" size={26} color="black" />
      </TouchableOpacity>

      {/* Filter Options Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => handleFilter('name')}>
              <Text style={styles.filterOption}>Sort by Name</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilter('nearest')}>
              <Text style={styles.filterOption}>Sort by Nearest</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  filterOption: {
    fontSize: 18,
    paddingVertical: 10,
  }
});
