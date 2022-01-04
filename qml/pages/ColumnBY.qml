import QtQuick 2.2
import Sailfish.Silica 1.0
import "engine.js" as Calc

Column {
    id: column
    width: page.width
    spacing: Theme.paddingLarge
    PageHeader {
        title: qsTr("Коды регионов")
    }
    SearchField {
        id: regionumeric
        width: parent.width
        placeholderText: "Введите код"
        readOnly: true
        font.pixelSize: Theme.fontSizeLarge
        onTextChanged: {
            Calc.regionVisibleBY()
        }
    }
    Label {
        id: regionlabel
        width: parent.width
        height: Theme.itemSizeMedium
        anchors.horizontalCenter: parent.horizontalCenter
        /*x: Theme.horizontalPageMargin*/
        text: "..."
        horizontalAlignment: Text.AlignHCenter
        wrapMode: Text.Wrap
        color: Theme.primaryColor
        font.pixelSize: Theme.fontSizeLarge
    }
    Keypad {
        id: keypadBY
        symbolsVisible: false
        vanityDialNumbersVisible: true
        vanityDialNumbers: ["Axx", "Bxx", "Exx", "Cxx", "Oxx", "Txx", "Mxx", "AAX", "EAK", "", "", ""]
        onPressed: {
            keyTimer.keyCode = number
            keyTimer.start()
        }
        onReleased: {
            keyTimer.keyCode = ""
            if (keyTimer.running === true){
                keyTimer.stop()
                Calc.digitPressedBY(number)
            }
        }
        Timer{
            id: keyTimer
            property string keyCode
            interval: 600
            onTriggered: {
                Calc.longPressedBY(keyCode)
            }
        }
    }
    Button {
        id: clrbutton
        anchors.horizontalCenter: parent.horizontalCenter
        preferredWidth: Theme.buttonWidthMedium
        text: "Очистить"
        onClicked: { regionumeric.text = "" }
    }
}
