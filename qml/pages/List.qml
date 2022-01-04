import QtQuick 2.0
import Sailfish.Silica 1.0
import Nemo.Configuration 1.0
//import org.nemomobile.configuration 1.0
Page {
    id: page
    allowedOrientations: Orientation.All

    ConfigurationValue {
        id: preferedLand
        key: "/apps/harbour-rusregcodes/settings/country"
        defaultValue: 0
    }
    ListRU{
        id: rulist
    }
    ListBY{
        id: bylist
    }
    ListUA{
        id: ualist
    }

    SilicaListView {
        id: listview
        anchors.fill: parent
        //width: parent.width
        //height: contentHeight
        header: PageHeader {
            title: "Коды регионов"
        }
        model: switch(preferedLand.value){
               case 0: return rulist
               case 1: return ualist
               case 2: return bylist
               }
        delegate: Listit{}
        VerticalScrollDecorator {}
    }
}
