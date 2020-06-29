#!/bin/bash
echo "starting"
for f in *.mp4; 
do 
	ffmpeg -i "$f" -vcodec libx265 -crf 30 "${f%.mp4}"_compressed.mp4 
done