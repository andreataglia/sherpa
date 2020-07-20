#!/bin/bash
echo "starting"
for f in *.mp4; 
do 
	ffmpeg -i "$f" -vcodec libvpx -qmin 0 -qmax 50 -crf 10 -b:v 500K -acodec libvorbis "${f%.mp4}".webm
done
echo "done"