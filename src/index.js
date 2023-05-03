import * as React from 'react';
import { Dimensions, View, ScrollView, Image, FlatList} from 'react-native';
import { Containers, Typografy } from "./components";
import { List } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { sun } from "./assets/images/";
import { weatherToday } from "./mock/weather-today";

const {width} = Dimensions.get("window")
const WDT = width*.9

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


export default function App() {

  return (
    <View
      style={{
        backgroundColor: "#254659",
        flex: 1
      }}
    >
    <ScrollView
      style={{
        margin: 20,
      }}
    >
      <Containers.SpaceBetween
        style={{
          alignItems: "center",
        }}
      >
        <List.Section style={{flex: 1, maxWidth: 200}}>
          <List.Accordion
            style={{
              backgroundColor: "#254659",
            }}
            titleStyle={{color:"white"}}
            expanded={false}
            title={<Typografy color={"white"}>Fortaleza</Typografy>}
            left={props => <List.Icon {...props} color='white' icon="map-marker" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <AntDesign name="bells" size={24} color="white" />
      </Containers.SpaceBetween>
      <Containers.Center>
        <Image 
          source={sun}
          style={{
            width: 300,
            height: 300
          }}
        />
        <Typografy color={"white"}>28°</Typografy>
        <Typografy color={"white"}>Precipitations</Typografy>
        <Typografy color={"white"}>Max.: 31° Min.: 25°</Typografy>

        <Containers.SpaceBetween
          style={{
            alignItems: "center",
            backgroundColor: "#001026",
            borderRadius: 20,
            marginTop: 20,
            marginBottom: 20,
            width: WDT
          }}>
          <Containers.SpaceBetween
            style={{
              alignItems: "center",
              padding: 10
            }}>
              <MaterialCommunityIcons name="grain" size={24} color="white" />
              <Typografy color={"white"}>{" "}6%</Typografy>
          </Containers.SpaceBetween>
          <Containers.SpaceBetween
            style={{
              alignItems: "center",
              padding: 10
            }}>
              <FontAwesome name="thermometer" size={24} color="white" />
              <Typografy color={"white"}>{" "}90%</Typografy>
          </Containers.SpaceBetween>
          <Containers.SpaceBetween
            style={{
              alignItems: "center",
              padding: 10
            }}>
              <Feather name="wind" size={24} color="white" />
              <Typografy color={"white"}>{" "}15 km/h</Typografy>
          </Containers.SpaceBetween>
        </Containers.SpaceBetween>
        <View
          style={{
            backgroundColor: "#001026",
            borderRadius: 20,
            marginBottom: 20,
            width: WDT,
            padding: 20
          }}>
            <Containers.SpaceBetween
              style={{
                alignItems: "center",
                marginBottom: 20
              }}>
              <Typografy color={"white"}>Today</Typografy>
              <Typografy color={"white"}>Mar, 9</Typografy>
            </Containers.SpaceBetween>
            <FlatList
              data={weatherToday}
              renderItem={({item}) => {
                const {weather, temperature, time} = item 
                return (
                <View 
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                >
                  <Typografy color={"white"}>{weather}</Typografy>
                  <Typografy 
                    color={"white"}
                    style={{
                      paddingTop: 20,
                      paddingBottom: 20
                    }}>{temperature}</Typografy>
                  <Typografy color={"white"}>{time}</Typografy>
                </View>
                )}}
              keyExtractor={item => item.id}
              horizontal
            />
        </View>

        <View
          style={{
            backgroundColor: "#001026",
            borderRadius: 20,
            marginBottom: 20,
            width: WDT,
            padding: 20
          }}>
            <Containers.SpaceBetween
              style={{
                alignItems: "center",
                marginBottom: 20
              }}>
              <Typografy color={"white"}>Next forecast</Typografy>
              <Typografy color={"white"}>Mar, 9</Typografy>
            </Containers.SpaceBetween>
            <FlatList
              data={weatherToday}
              renderItem={({item}) => {
                const {weather, temperature, time} = item 
                return (
                <View 
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                >
                  <Typografy color={"white"}>{weather}</Typografy>
                  <Typografy 
                    color={"white"}
                    style={{
                      paddingTop: 20,
                      paddingBottom: 20
                    }}>{temperature}</Typografy>
                  <Typografy color={"white"}>{time}</Typografy>
                </View>
                )}}
              keyExtractor={item => item.id}
              horizontal
            />
        </View>
      </Containers.Center>
    </ScrollView>
    </View>
  );
}
