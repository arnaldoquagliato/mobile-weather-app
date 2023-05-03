import * as React from 'react';
import { Dimensions, View, ScrollView, Image, FlatList} from 'react-native';
import { Containers, Typografy } from "./components";
import { List } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { sun, rain } from "./assets/images/";
import {}from "./utils/dayOfWeek";
import { getWeather } from "./infrastructure/";
import { theme } from "./assets/theme/";
import { FontAwesome5 } from '@expo/vector-icons';
const {width} = Dimensions.get("window")
const WDT = width*.9

export default function App() {

  const [data, setData] = React.useState(null)
  const init = async () => setData(await getWeather())
  
  React.useEffect(() => {
    init()
  }, [])


  if(!data)
    return <Typografy>Carregando...</Typografy>


  const handleIcon = (name) => {
    switch (name) {
      case "rain":
        return <FontAwesome5 name="cloud-rain" size={24} color="white" />
      case "cloud":
        return <AntDesign name="cloud" size={24} color="white" />
      case "cloudly_day": 
        return <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
      default:
        break;
    }
  }
  const partes = data.date.split("/");
  const date = partes[0] + "/" + partes[1];
  const todayWeaderInfo = data.forecast.find(item => item.date===date)

  return (
    <View
      style={{
        backgroundColor: theme.colors.di_blue,
        flex: 1
      }}
    >
    <ScrollView
      style={{
        margin: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Containers.SpaceBetween
        style={{
          alignItems: "center",
        }}
      >
        <List.Section style={{flex: 1, maxWidth: 200}}>
          <List.Accordion
            style={{
              backgroundColor: data.condition_slug === "cloud" ? theme.colors.di_blue : theme.colors.di_bluelighter,
            }}
            expanded={false}
            title={<Typografy color={"white"}>{data.city_name}</Typografy>}
            theme={{colors: {
              onSurfaceVariant: "white"
            }}}
            left={props => <List.Icon {...props} color='white' icon="map-marker" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <AntDesign name="bells" size={24} color="white" />
      </Containers.SpaceBetween>
      <Containers.Center>
        <Image 
          source={data.condition_slug === "cloud" ? rain :sun}
          style={{
            width: 300,
            height: 300
          }}
        />
        <Typografy color={"white"} size={"h1"}>{data.temp}°</Typografy>
        <Typografy color={"white"} size={"h2"}>{data.description}</Typografy>
        <Typografy color={"white"} size={"h3"}>Max.: {todayWeaderInfo.min}° Min.: {todayWeaderInfo.max}°</Typografy>
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
              <Typografy color={"white"}>{" "}{todayWeaderInfo.rain*100}%</Typografy>
          </Containers.SpaceBetween>
          <Containers.SpaceBetween
            style={{
              alignItems: "center",
              padding: 10
            }}>
              <FontAwesome name="thermometer" size={24} color="white" />
              <Typografy color={"white"}>{" "}{todayWeaderInfo.rain_probability}%</Typografy>
          </Containers.SpaceBetween>
          <Containers.SpaceBetween
            style={{
              alignItems: "center",
              padding: 10
            }}>
              <Feather name="wind" size={24} color="white" />
              <Typografy color={"white"}>{" "}{todayWeaderInfo.wind_speedy}</Typografy>
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
              <Typografy color={"white"} bold size="h2">Próximas previsões</Typografy>
              <AntDesign name="calendar" size={24} color="white" />
            </Containers.SpaceBetween>
            <FlatList
              data={data.forecast}
              renderItem={({item}) => {
                const {weekday, condition, max, min} = item 
                return (
                  <Containers.SpaceBetween
                    style={{
                      alignItems: "center",
                      marginBottom: 20
                    }}
                  >
                    <Typografy color={"white"}>{weekday}</Typografy>
                    {handleIcon(condition)}
                    <Containers.SpaceBetween>
                      <Typografy color={"white"} bold>{max}° {" "}</Typografy>
                      <Typografy color={"white"} style={{opacity: 0.5, marginLeft: 10}}>{min}°</Typografy>
                    </Containers.SpaceBetween>
                  </Containers.SpaceBetween>
                )}}
              keyExtractor={item => item.id}
            />
        </View>
      </Containers.Center>
    </ScrollView>
    </View>
  );
}
