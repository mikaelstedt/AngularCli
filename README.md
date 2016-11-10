# Sws

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

# How to get started

# Prequesites:

- Install npm => https://nodejs.org/en/download/ Check if have that install on your computer, run npm -v in the commandline
- Install git => https://git-scm.com/download/win

See also: https://wikiinline.scania.com/wiki/How_to_set_up_a_Angular2_project_from_scratch

# Run:
1 npm install -g webpack angular-cli
2 Get project from version control
3 Download visual studio code: https://code.visualstudio.com/download
4 Update Chrome: to do that download an chrome installer manually: https://www.google.com/chrome/browser/desktop/index.html
  - Close all Chrome instances in the task manager
4 Open Visual Studio Code
5 Update User settings: File > Preferences > User Settings
  - Add your perforce workspace to the user settings

        // Place your settings in this file to overwrite the default settings
        {
             ...
            "perforce.client":"ijoc6c_sws_main"
             ...
        }
        "ijoc6c_sws_main" <-- This is your workspace in perforce, change this....k

* Go to extentions and add:
  1 Debugger for Chrome (Microsoft)
  2 Perforce for VS Code (slevesque)

* Enable and restart Visual Studio Code

* Install all necessary node modules (this will take a while):
  * in VSC: Ctrl+P: task npm install 

* After that is done you can just press F5 and debug the application.
  * The first time you do that after restarting VSC this will not start the browser, because the application needs
to be "served" first and this takes to long for the debugger. Just press F5 again when you see the following in Output:
 ...webpack: bundle is now Valid

* This should start Chrome and you should end up hitting a breakpoint, which is an uncaught exception - untick Uncaught Exceptions in the Breakpoints list in the Debug Window.
