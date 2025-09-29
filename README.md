- figure out how to enable firefox css first (this might help - https://github.com/dev-palwar/configs/tree/main/firefox)
- navigate to about:profiles and open the default profile
- there should be a chrome folder (create if not already there)
- inside that create a images folder
- put the userContent.css file in the chrome folder

now that the setup is done - 
- put the node-pntrst-wlppr-mkr folder anywhere you want
- if you're on linux then you can put this "alias cover='node path/to/your/folder/index.js'" in the bashrc (make sure you cd into the folder and run npm install"
- source bashrc and run this - "cover /link/to/your/image/online'
- restart your firefox

if youre not on linux then manually 
- cd into the folder
- run npm install
- run node index.js /link/to/your/image/online
