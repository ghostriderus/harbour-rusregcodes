import QtQuick 2.2
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

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height
        Column {
            id: column
            width: parent.width
            PageHeader {
                title: "Настройки"
            }
            ComboBox {
                width: parent.width
                label: "Страна"
                currentIndex: preferedLand.value
                menu: ContextMenu {
                    MenuItem { text: "Россия" }
                    MenuItem { text: "Украина" }
                    MenuItem { text: "Беларусь" }
                }
                onCurrentIndexChanged: {
                    preferedLand.value = currentIndex
                }
            }
        }
    }
}
