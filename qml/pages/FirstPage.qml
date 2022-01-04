import QtQuick 2.2
import Sailfish.Silica 1.0
import "engine.js" as Calc
import Nemo.Configuration 1.0
//import org.nemomobile.configuration 1.0

Page {

    id: page
    allowedOrientations: Orientation.All

    ConfigurationValue {
        id: preferedLand
        key: "/apps/harbour-rusregcodes/settings/country"
        defaultValue: 0
        onValueChanged: column.setSource(setLoaderSrc())
    }

    SilicaFlickable {
        anchors.fill: parent

        PullDownMenu {
            MenuItem {
                text: qsTr("О программе")
                onClicked: pageStack.push(Qt.resolvedUrl("About.qml"))
            }
            MenuItem {
                text: qsTr("Настройки")
                onClicked: pageStack.push(Qt.resolvedUrl("Settings.qml"))
            }
        }
        contentHeight: column.height
        Loader{
            id: column
            source: setLoaderSrc()
        }
    }
    onStatusChanged: {
        if (status === PageStatus.Active && pageStack.depth === 1) {
            pageStack.pushAttached(Qt.resolvedUrl("List.qml"), PageStackAction.Animated);
        }
    }
    function setLoaderSrc(){
        switch(preferedLand.value){
        case 0: return "ColumnRU.qml"
        case 1: return "ColumnUA.qml"
        case 2: return "ColumnBY.qml"
        }
    }
}
