input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    IotLoRaNode.LightValue(input.lightLevel(), Channels.One)
    IotLoRaNode.TemperatureValue(input.temperature(), Channels.Two)
    IotLoRaNode.AccelorometerValue(
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z),
    Channels.Three
    )
    IotLoRaNode.loraTransmitPayload()
    basic.showIcon(IconNames.Square)
})
IotLoRaNode.InitialiseRadioOTAA(
"6081F91695A98F61",
"6081F92047B1891F",
"2C03630B338EB46843B63049EDDA8312",
SpreadingFactors.Seven
)
basic.showIcon(IconNames.Yes)
