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
            Calc.regionVisible()
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
        symbolsVisible : false
        vanityDialNumbersVisible : false
        onClicked: {
            Calc.digitPressed(number)
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
