import QtQuick 2.0
import Sailfish.Silica 1.0
import "../pages"

CoverBackground {
    Label {
        id: label
        anchors.centerIn: parent
        text: "Коды регионов"
    }

    CoverActionList {
        id: coverAction

        CoverAction {
            iconSource: "image://theme/icon-cover-search"
            onTriggered: {
                if (pageStack.depth === 1) {
                    mainWindow.activate()
                           }
                else if (pageStack.depth > 1) {
                    pageStack.navigateBack()
                    mainWindow.activate()
                                    }
                }
            }

        CoverAction {
            iconSource: "image://theme/icon-cover-subview"
            onTriggered: {
                if (pageStack.depth === 1) {
                    pageStack.push(Qt.resolvedUrl("../pages/List.qml"))
                    mainWindow.activate()
                           }
                else if (pageStack.depth > 1) {
                mainWindow.activate()
                }
            }
        }
    }

}
