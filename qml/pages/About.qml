import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height

        Column {
            id: column
            width: parent.width

            PageHeader {
                title: "О программе"
            }

            Column {
                    id: appTitleColumn

                    anchors {
                        left: parent.left
                        leftMargin: Theme.horizontalPageMargin
                        right: parent.right
                        rightMargin: Theme.horizontalPageMargin
                        topMargin: Theme.paddingMedium
                    }

                    Label {
                        anchors.horizontalCenter: parent.horizontalCenter
                        height: Theme.itemSizeMedium
                        font.pixelSize: Theme.fontSizeLarge
                        text: "Region codes 1.4"
                    }
                    SectionHeader {text: 'Описание'}
                    Label {
                        horizontalAlignment: Text.AlignHCenter
                        height: Theme.itemSizeMedium
                        text: "Список кодов автомобильных регионов России, Беларуси и Украины для Sailfish OS"
                        width: parent.width
                        wrapMode: Text.WordWrap
                    }
                    SectionHeader { text: 'Автор'}
                    Label {
                        horizontalAlignment: Text.AlignHCenter
                        anchors.horizontalCenter: parent.horizontalCenter
                        font.pixelSize: Theme.fontSizeExtraSmall
                        text: "Влад 'ghostrider'"
                        width: parent.width
                    }
                   SectionHeader { text: 'Контакты' }
                    Label {
                        horizontalAlignment: Text.AlignHCenter
                        height: Theme.itemSizeExtraSmall
                        anchors.horizontalCenter: parent.horizontalCenter
                        font.pixelSize: Theme.fontSizeExtraSmall
                        wrapMode: Text.Wrap
                        text: "Идеи и пожелания можно оставить на странице приложения"
                        width: parent.width
                    }
                    SectionHeader { text: '' }
                    Label {
                        horizontalAlignment: Text.AlignHCenter
                        anchors.horizontalCenter: parent.horizontalCenter
                        font.pixelSize: Theme.fontSizeExtraSmall
                        text: "<2018-2022>"
                        width: parent.width
                    }
                }

            }

        }
    }
