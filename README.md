# Betabox (APP)
This is Version 1.0 of the BetaBox App

Instructions to install the app on an android phone:

Option 1:

1. Navigate to (Betabox\BetaBox1.0\platforms\android\build\outputs\apk) and obtain the debug apk.
2. Connect the android device using a USB cable and access it as a media device.
3. Copy and Paste the apk file to a folder you could navigate to (such as the Downloads folder).
4. You will need to setup the phone from the settings menu so that it you can install apps from unknown sources outside of the app store.
5. Unplug the phone and navigate to the downloaded file using the file manager.
6. Press on the apk file and it will start to install on your phone.

Option 2:

You could install the ionic platform which was used to develop the app and make install it in your phone.

1. Follow the steps in the following URL to install the ionic CLI on command prompt (http://ionicframework.com/docs/cli/install.html)
2. Connect the android device using a USB cable.
3. You will need to unlock the Developer options and enable USB debugging mode (http://developer.android.com/tools/help/adb.html#Enabling).
4. Navigate to the \BetaBox1.0 file through the command line.
5. Type (ionic run android) in the command line, and it will take care of installing the apk on the device if it is available or running it on an emulator.
