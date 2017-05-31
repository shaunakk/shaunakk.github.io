import os
import sys
from Naked.toolshed.shell import execute_js
username=#your username (a string)
os.chdir("/home/"+username+"/media")
filenames = os.listdir(os.curdir)
for filename in filenames:
    if filename.endswith(("jpg")):
        sys.stderr.write ('File found. Exiting program. \n')
        os.chdir("/home/"+username+"/camera")
        success = execute_js('email.js')
        break
else:
    sys.stderr.write ('No file found. Exiting program. \n')
    sys.exit()

