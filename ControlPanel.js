import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native'

import Button from 'react-native-button'
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

let styles = require('./styles');

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    let {closeDrawer} = this.props
    return (
    <Image source={require('./assets/control-panel.png')} style={styles.controlPanel.backgroundImage}>
          <ScrollView style={styles.container}>
            <Button containerStyle={styles.controlPanel.exitContainer} style={styles.controlPanel.exit}
            onPress={closeDrawer}>
            X
            </Button>

            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base} 
            onPress={()=>Actions.main({type : "reset", open: false})}>MAIN</Button>
            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base}
            onPress={()=>Actions.transactionList({type : "reset"})}>TRANSACTIONS</Button>
            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base}
            onPress={()=>Actions.paymentContactsList({type : "reset"})}>CONTACTS</Button>
            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base}
            onPress={()=>Actions.paymentDeposit({type : "reset"})}>DEPOSIT</Button>
            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base}
            onPress={()=>Actions.about({type : "reset", open: false})}>ABOUT</Button>
            <Button containerStyle={styles.controlPanel.containerBase} style={styles.controlPanel.base}
            onPress={()=>Actions.loginRegister({type : "reset", open: false})}>LOG OUT</Button>
          </ScrollView>
      </Image>
    )
  }
}


