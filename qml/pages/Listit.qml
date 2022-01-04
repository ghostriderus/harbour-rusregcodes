import QtQuick 2.2
import Sailfish.Silica 1.0

ListItem {
    id: listItem

    //property alias title: titleLabel.text
    //property alias description: descriptionLabel.text

    Row {
        width: parent.width
        //anchors.horizontalCenter: parent.horizontalCenter
        //anchors.verticalCenter: parent.verticalCenter

        Label {
            id: marginblock
            width: 20
        }
        Label {
            id: titleLabel
            anchors.verticalCenter: parent.verticalCenter
            width: parent.width - descriptionLabel.width - marginblock.width*2
            //color: Theme.secondaryHighlightColor
            color: Theme.primaryColor
            //font.pixelSize: Theme.fontSizeExtraLarge
            text: title
        }

        Label {
            id: descriptionLabel
            color: Theme.secondaryColor
            font.pixelSize: Theme.fontSizeLarge
            text: description
        }
        Label {
            id: marginblock2
            width: 20
        }
    }
}
