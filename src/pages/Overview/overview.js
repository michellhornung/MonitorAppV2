import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import { H3, Text, Container, Icon } from 'native-base';

export default class Overview extends Component {
  static navigationOptions = {
    title: 'OVERVIEW',
    headerStyle: {
      backgroundColor: '#f06f32',
      height: 50,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 26,
    },
    headerLeft: null
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          data: [
            { name: 'LH TEC', code: 'rgba(218, 76, 75, 0.8)' }, { name: 'DKVOX', code: 'rgba(204, 204, 0, 0.5)' },
            { name: 'RESLUT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'XYZ', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'AIRBOT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'IT4U', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'HAMMERCOD', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'DRIVEN', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'RESLUT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'XYZ', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'AIRBOT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'IT4U', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'HAMMERCOD', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'DRIVEN', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'RESLUT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'XYZ', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'AIRBOT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'IT4U', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'HAMMERCOD', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'DRIVEN', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'RESLUT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'XYZ', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'AIRBOT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'IT4U', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'HAMMERCOD', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'DRIVEN', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'RESLUT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'XYZ', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'AIRBOT', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'IT4U', code: 'rgba(255, 255, 255, 0.2);' },
            { name: 'HAMMERCOD', code: 'rgba(255, 255, 255, 0.2);' }, { name: 'DRIVEN', code: 'rgba(255, 255, 255, 0.2);' },
          ]
        }
        // {
        //   data: [
        //     { name: 'WISTERIA', code: '#16a085' }, { name: 'MIDNIGHT BLUE', code: '#16a085' },
        //     { name: 'SUN FLOWER', code: '#16a085' }, { name: 'CARROT', code: '#16a085' },
        //     { name: 'ALIZARIN', code: '#16a085' }, { name: 'CLOUDS', code: '#16a085' },
        //   ]
        // },
        // {
        //   data: [
        //     { name: 'BELIZE HOLE', code: '#16a085' }, { name: 'CONCRETE', code: '#16a085' }, { name: 'ORANGE', code: '#16a085' },
        //     { name: 'PUMPKIN', code: '#16a085' }, { name: 'POMEGRANATE', code: '#16a085' },
        //     { name: 'SILVER', code: '#16a085' }, { name: 'ASBESTOS', code: '#16a085' }
        //   ]
        // }
      ]
    };
  }

  render() {
    return (
      <Container style={styles.container}>

        <Icon ios='ios-thumbs-down' android="md-thumbs-down" style={{ fontSize: 28, color: '#c0392b' }} />
        <H3 style={styles.H3}>Verificar Serviços</H3>

        <SuperGridSectionList
          itemDimension={130}
          sections={this.state.items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{'Some Info here'}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#364e68',
  },
  H3: {
    color: '#fff',
    paddingBottom: 10,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#ccc',
  },
});