import React, { useState } from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [name, setName] = useState('Nguyễn Thị Tùng Vy');
  const [email, setEmail] = useState('example@gmail.com');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [notify, setNotify] = useState(true);
  const [publicEmail, setPublicEmail] = useState(false);

  const validate = () => {
    if (!name || !email) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Lỗi', 'Email không hợp lệ');
      return false;
    }
    if (phone && !/^[0-9]{9,11}$/.test(phone)) {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ');
      return false;
    }
    return true;
  };

  const saveProfile = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Thành công', 'Đã lưu thay đổi');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        backgroundColor="#6C63FF"
        barStyle="light-content"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>

          {/* ===== PROFILE HEADER ===== */}
          <View style={styles.header}>
            <Image
              source={{ uri: '' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.bio}>Mobile Developer ✨</Text>
          </View>

          {/* ===== PROFILE FORM ===== */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>

            <TextInput
              style={styles.input}
              placeholder="Tên"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <TextInput
              style={styles.input}
              placeholder="Địa chỉ"
              value={address}
              onChangeText={setAddress}
            />

            <View style={styles.switchRow}>
              <Text>Nhận thông báo</Text>
              <Switch value={notify} onValueChange={setNotify} />
            </View>

            <View style={styles.switchRow}>
              <Text>Hiển thị email công khai</Text>
              <Switch value={publicEmail} onValueChange={setPublicEmail} />
            </View>

            {loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#6C63FF" />
                <Text>Đang lưu...</Text>
              </View>
            )}

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.btnPrimary} onPress={saveProfile}>
                <Text style={styles.btnText}>Lưu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSecondary}
                onPress={() => Alert.alert('Đã hủy')}
              >
                <Text>Hủy</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => setShowLogoutModal(true)}
            >
              <Text style={{ color: 'red' }}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>

          {/* ===== SETTINGS ===== */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Cài đặt</Text>

            {[
              'Cài đặt tài khoản',
              'Cài đặt thông báo',
              'Cài đặt bảo mật',
              'Ngôn ngữ',
              'Chủ đề',
              'Giúp đỡ & Hỗ trợ',
              'Về ứng dụng',
            ].map((item) => (
              <TouchableOpacity key={item} style={styles.settingItem}>
                <Text>{item}</Text>
                <Text>{'>'}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* ===== LOGOUT MODAL ===== */}
      <Modal transparent visible={showLogoutModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Xác nhận</Text>
            <Text>Bạn có chắc muốn đăng xuất?</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => {
                  setShowLogoutModal(false);
                  Alert.alert('Đã đăng xuất');
                }}
              >
                <Text style={styles.btnText}>Xác nhận</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSecondary}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
