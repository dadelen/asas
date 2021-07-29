enum RgbColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}
enum on_off {

//% block="on"
_on = 1,
//% block="off"
_off = 0,
}
//% color="#FFA500" weight=10 icon="\uf2c9" block="Sensor:bit"
namespace sensors {
//% blockId=actuator_buzzer0 block="有源蜂鸣器 pin ：%pin|status %status"   group="有源蜂鸣器"
//% weight=70
//% subcategory="执行器"
export function actuator_buzzer0(pin: DigitalPin, status: on_off): void {
    pins.digitalWritePin(pin, status)
}

//% blockId=actuator_buzzer1 block="无源蜂鸣器 pin ：%pin|freq %freq"   group="无源蜂鸣器"
//% weight=70
//% subcategory="执行器"
export function actuator_buzzer1(pin:AnalogPin, freq: number): void {
    pins.analogWritePin(pin, freq)
}
//% blockid=actuator_relay block="actuator_relay pin : %pin|status %status" group="继电器"
//% weight=80
//%subcategory="执行器"
export function actuator_relay(pin: DigitalPin,status:on_off): void {
    pins.digitalWritePin(pin, status)
    
}
}
    
