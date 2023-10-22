#!/bin/bash
# Usage: ./dev.sh [once]
# Description: Make the PCB file from the keyboard.yaml file.
# Whenever the keyboard.yaml file is modified, the PCB file is regenerated.
# If the "once" argument is passed, the PCB file is only generated once and
# the script exits.

set -e

# Check arguments
if [[ "$1" != "once" && "$1" != "" ]]; then
	echo "Usage: ./dev.sh [once]"
	exit 1
fi

OUTPUT_DIR=output

pcbnew_pid=

build() {
	node_modules/ergogen/src/cli.js . -o $OUTPUT_DIR && \
        {
            if [[ "$pcbnew_pid" ]]; then
                kill "$pcbnew_pid" || true
                rm -rf $OUTPUT_DIR/pcbs/\~main.kicad_pcb.lck
            fi
            pcbnew $OUTPUT_DIR/pcbs/main.kicad_pcb &
            pcbnew_pid=$!
        } || true
}


build

if [[ "$1" == "once" ]]; then
	exit 0
fi

while true; do
	inotifywait -e modify config.yaml footprints/ || true
	build
done
