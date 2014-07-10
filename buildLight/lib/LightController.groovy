package lib

class LightController {

    def LIGHTS = [green: '0 0 101 2 6', red: '0 0 101 2 5', off: '0 0 101 2 7', yellow: '0 0 101 2 3']

    void green() {
        changeLight('green')
    }

    void red() {
        changeLight('red')
    }

    void off() {
        changeLight('off')
    }

    void yellow() {
        changeLight('yellow')
    }

    private void changeLight(String colourOrState) {
        "USBCMDAP ${LIGHTS[colourOrState]}".execute().waitForProcessOutput()
    }
}
