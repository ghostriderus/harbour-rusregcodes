# NOTICE:
#
# Application name defined in TARGET has a corresponding QML filename.
# If name defined in TARGET is changed, the following needs to be done
# to match new name:
#   - corresponding QML filename must be changed
#   - desktop icon filename must be changed
#   - desktop filename must be changed
#   - icon definition filename in desktop file must be changed
#   - translation filenames have to be changed

# The name of your application
TARGET = harbour-rusregcodes

CONFIG += sailfishapp_qml

DISTFILES += qml/harbour-rusregcodes.qml \
    qml/cover/CoverPage.qml \
    qml/pages/FirstPage.qml \
    qml/pages/About.qml \
    qml/pages/List.qml \
    qml/pages/Listit.qml \
    rpm/harbour-rusregcodes.changes.in \
    rpm/harbour-rusregcodes.changes.run.in \
    rpm/harbour-rusregcodes.spec \
    rpm/harbour-rusregcodes.yaml \
    harbour-rusregcodes.desktop

SAILFISHAPP_ICONS = 86x86 108x108 128x128
