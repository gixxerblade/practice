#!/bin/bash
nc -w3 $1 $2 
RESULT=$?
for i in {1..25};
do
echo $i
if [ $RESULT -eq 0 ]; then
echo $RESULT
fi
EOF

