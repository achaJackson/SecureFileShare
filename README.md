# SecureFileShare file sharing app apis

Rest api using Node, Express, Mongo.
We will build rest api for a simple file sharing app. 

# How it works ? 
The platform requires only the receiver's phone number to make a file transfer. Once the file is uploaded and the parameters set, a sharable link is now generated. The sender can now send this clickable link to the receiver in any manner(including unsecured methods such as personal devices, or apps or exchange services, etc) The receiver now has to click and download the file. However, before downloading, Two-factor Authentication (2FA) lunches. I used a TOTP (Time based one-time password) for 2FA. The code is sent to the receiver's phone number and you have less than 2 minutes to validate your input and you are granted access for a limited time to download the resource shared else, the page is expired. This respects the norms of confidentiality(encryption), Integrity, and availability(2FA).

Points to note:clear
-No user account is needed. You need just a phone number(receiver)
-Cost no fee (0 FCFA) [Cheaper than Google Drive, One Drive, Dropbox. etc]
-Cannot be susceptible to phishing attacks since user accounts don't exist.
-Superfast
-Multi-Factor Authentication (Something you know(Token code) and Something you have(mobile phone))

### Frontend source code can be found on @achaJackson Github
https://github.com/achaJackson/SecureFileShare-Frontend


## Installation 
After download or clone, run `docker build .` in the home directory to build the image. Then run `docker run -p 3000:3000 imageID` to run the image and produce a running container(your app).

also do not forget to rename `.env-template` into `.env` an put all creadentials.

🙏 If you find this repo helpful then don't forget to give a start ❇️ to this repository. :)
