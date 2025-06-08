import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Colors from '../LoginScreen/Utils/Colors';

const SlotBooking = () => {
  const [station, setStation] = useState('');
  const [slot, setSlot] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookings, setBookings] = useState([]); // Store past bookings

  const handleBooking = () => {
    if (!station || !slot || !paymentMethod) {
      Alert.alert('Error', 'Please select a station, a time slot, and a payment method.');
      return;
    }

    const isDuplicate = bookings.some(
      (booking) => booking.station === station && booking.slot === slot
    );

    if (isDuplicate) {
      Alert.alert('Duplicate Booking', 'This slot is already booked for this station.');
      return;
    }

    const newBooking = {
      id: Date.now(),
      station,
      slot,
      paymentMethod,
    };

    setBookings([newBooking, ...bookings]); // Add to top

    Alert.alert(
      'Booking Confirmed ✅',
      `🚗 You have successfully booked:\n\n📍 Station: ${station}\n⏰ Time Slot: ${slot}\n💳 Payment: ${paymentMethod}`,
      [{ text: "OK", onPress: () => console.log("Booking confirmed") }]
    );

    // Reset selections
    setStation('');
    setSlot('');
    setPaymentMethod('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My <Text style={{ color: Colors.PRIMARY }}>Bookings</Text>
      </Text>

      <Card style={styles.card}>
        <Card.Title title="EV Charging Slot Booking" titleStyle={styles.title} />
        <Card.Content>

          {/* Charging Station Picker */}
          <Text style={styles.label}>Select Charging Station:</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={station} onValueChange={(value) => setStation(value)} style={styles.picker}>
              <Picker.Item label="Choose a station" value="" />
              <Picker.Item label="Station A - Location 1" value="Station A - Location 1" />
              <Picker.Item label="Station B - Location 2" value="Station B - Location 2" />
              <Picker.Item label="Station C - Location 3" value="Station C - Location 3" />
            </Picker>
          </View>

          {/* Time Slot Picker */}
          <Text style={styles.label}>Choose a Time Slot:</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={slot} onValueChange={(value) => setSlot(value)} style={styles.picker}>
              <Picker.Item label="Select a time slot" value="" />
              <Picker.Item label="9:00 AM - 10:00 AM" value="9am-10am" />
              <Picker.Item label="10:00 AM - 11:00 AM" value="10am-11am" />
              <Picker.Item label="11:00 AM - 12:00 PM" value="11am-12pm" />
              <Picker.Item label="12:00 PM - 1:00 PM" value="12pm-1pm" />
              <Picker.Item label="1:00 PM - 2:00 PM" value="1pm-2pm" />
              <Picker.Item label="2:00 PM - 3:00 PM" value="2pm-3pm" />
              <Picker.Item label="3:00 PM - 4:00 PM" value="3pm-4pm" />
              <Picker.Item label="4:00 PM - 5:00 PM" value="4pm-5pm" />
              <Picker.Item label="5:00 PM - 6:00 PM" value="5pm-6pm" />
            </Picker>
          </View>

          {/* Payment Method Picker */}
          <Text style={styles.label}>Choose Payment Method:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={paymentMethod}
              onValueChange={(value) => setPaymentMethod(value)}
              style={styles.picker}
            >
              <Picker.Item label="Select a payment method" value="" />
              <Picker.Item label="UPI" value="UPI" />
              <Picker.Item label="Cash on Arrival" value="Cash" />
            </Picker>
          </View>

          {/* If UPI selected, show UPI ID and Payment Done button */}
          {paymentMethod === 'UPI' && (
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.label}>Send UPI to:</Text>
              <Text style={{ fontSize: 16, color: '#333', marginBottom: 5, fontWeight: 'bold' }}>
                vikas0600@ybl
              </Text>
              <Button
                mode="contained"
                onPress={handleBooking}
                style={[styles.button, { backgroundColor: '#6200ee' }]}
              >
                Payment Done
              </Button>
            </View>
          )}

          {/* If Cash is selected, show Book Slot button */}
          {paymentMethod === 'Cash' && (
            <Button mode="contained" onPress={handleBooking} style={styles.button}>
              Book Slot
            </Button>
          )}

        </Card.Content>
      </Card>

      {/* Booking History */}
      {bookings.length > 0 ? (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>📋 Booking History</Text>
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>
                  📍 {item.station} | ⏰ {item.slot} | 💳 {item.paymentMethod}
                </Text>
              </View>
            )}
          />
        </View>
      ) : (
        <Text style={styles.emptyText}>No bookings yet. Start by booking a slot!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    padding: 10,
    fontFamily: 'outfit-medium',
    fontSize: 30,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#555',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#4CAF50',
  },
  historyContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyText: {
    fontSize: 16,
    color: '#444',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});

export default SlotBooking;
