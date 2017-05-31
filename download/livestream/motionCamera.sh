cd /home/pi/videos
find . -name "*" -print | xargs rm
sudo chmod -R ugo+rw /tmp/motion
cd /tmp/motion
find -maxdepth 1 -name '*' -exec mv -t /home/pi/videos {} +
sudo cp /tmp/motion/* /home/pi/videos
cd /tmp/motion
find . -name "*" -print | xargs rm
