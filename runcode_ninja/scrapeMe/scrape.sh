#!/bin/bash
curl -s $1 | grep -Po '(?<=href=")[^"]*'
