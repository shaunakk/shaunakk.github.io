PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/usr/share
#!/bin/bash
export ip= #your pi's IP
export username= #your username
cd
sshpass -praspberry ssh -o "StrictHostKeyChecking no" pi@$ip 'sh /home/pi/motionCamera.sh'
sshpass -p "raspberry" scp pi@$ip:/home/pi/videos/* /home/$username/media
cd /home/$username/media
python /home/$username/fileCheck.py
cd /home/$username/media
for i in *.swf;do ffmpeg -i $i -ar 44100 $i.mp4; done
cd /home/$username/media
drive upload -f *.mp4
cp /home/$username/media/*.mp4 /home/$username/video
cd /home/$username/video
rm /home/$username/media/*

