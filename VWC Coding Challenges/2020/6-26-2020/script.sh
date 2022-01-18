#!/bin/bash
read -p "Which directory would you like to search?" dirname

if [ `ls -1A $dirname | wc -l` -eq 0 ] ; then
   echo "Empty directory"
else
   ls -ah $dirname
fi