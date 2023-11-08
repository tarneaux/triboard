# Triboard

The Triboard is an ergonomic, split mechanical keyboard using Kailh Choc switches and any Seeed XIAO-compatible controller.

Three builds are possible:
- 34 keys, wireless, with ZMK on XIAO nRF52840 controllers
- 36 keys, wired, with QMK on XIAO RP2040 controllers
- 36 keys, wired, with KMK on XIAO ESP32C3 controllers

On the wireless version, one thumb keys needs to be removed on each half to fit the battery (therefore it is only 34 keys).

For now I have only tried a full build with ZMK but KMK seems to work well on ESP32C3 XIAOs.

The PCB is automatically generated with Ergogen and then routed by hand. You could in theory use Freerouting or similar software instead.

[PCB releases](https://github.com/tarneaux/triboard/releases) are available.

[Link to ZMK config repo](https://github.com/tarneaux/zmk-config-triboard)

## Building the PCB

To build the keyboard with ergogen and open the PCB in KiCad's PCBnew, run:
```sh
npm install
./build.sh # Automatically update the PCB and reopen pcbnew whenever config.yaml changes
```
