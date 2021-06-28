import React from 'react';
import { useState } from 'react';
import {
  Alert,Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';


const App =()=>{
  const [flash,setFlash]=useState(false)
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  const handlePress=()=>{
    setFlash(!flash);
  }

    return (
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={flash?RNCamera.Constants.FlashMode.torch:RNCamera.Constants.FlashMode.off}
        reactivate={true}
        
        topContent={
          <Text style={styles.centerText}>
            Scan A QR CODE
          </Text>
        }
        bottomContent={
        
          <Button
        title="Flash"
        onPress={handlePress}
      />
        }
      />
    );
  
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});


export default App;