let docsItemsJson = {
  "Pichai_UX": {},
  "Lucy": {},
  "Gryffindor": {},
  "NexOS": {},
  "Stereo": {},
  "Debugger": {},
  "Mod_Docs!": {},
  "Thunkable": {
    description: 'Modules are a way that allows Thunkable users to create more functions for their app. it allows them to develop easier and faster. <br> Below is a list of Modules we have developed for Thunkable.',

    items: {
      "Keyboard_Events": {
        about: {

          installation: {
            link: 'https://x.thunkable.com/module/66bcb8c35969ac7509eca98f/',
            guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
          },
          description: 'The keyboard events module allows users to capture key presses and releases inside of their Thunkable project.',
          useCases: ['Capture key presses', 'Capture key releases', 'Capture heldDown events'],

          notes: { // allows the developer or ai to supply additional notes such as bugs
            'Bug - Module stays visible after setting visible to false': "This is a Thunkable bug, a temporary workaround is to place the module in a group and then hide or show that group."
          },

          demoLinks: { // links to examples users can look at
          },

          platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
          required: ['Physical keyboard'],
          languages: ['Javascript', 'Thunkable Blockly'],

          repo: {
            repoName: 'Mod Docs',
            link: 'https://github.com/lukeplays33/Mod-Docs',
            openSource: 'Open source',
            developerDocs: '',
            developer: 'dreamForge',
            version: '0.0.1',
            status: "Alive", // deperecated/ no-longer maintained or alive or custom

            license: {
              name: 'Apache 2.0',
              link: 'https://httpd.apache.org/docs/2.4/license.html'
            },
          },

        },
        contents: {
          requestFocus: {
            description: 'The requestFocus function allows the developer to manually request listening to keyboard events, wich automatically stops when interacting with UI elements.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[],
            type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/keyboardEvents/Method_%20requestFocus.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },
          keyPress: {
            description: 'The keyPress event fires when a key is pressed and released on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/keyboardEvents/Event_%20keyPress.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          keyDown: {
            description: 'The keyDown event fires when a key is pressed down on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://cdn.discordapp.com/attachments/1313848661788069930/1313848759226204200/Event__keyDown.png?ex=6751a082&is=67504f02&hm=f7c802fd6e30e3c6f902233e3c0784b9224aca5f6300d5f71badc89615b3004c&', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          keyUp: {
            description: 'The keyUp event fires when a key is released on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/keyboardEvents/Event_%20keyUp.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },
        },
        //quickLinks: [], //e.g. for quickly navigating to a tutorial
      },
      "Screen_Events": {
        about: {

          installation: {
            link: 'https://x.thunkable.com/module/66bda9468b92252078174df8/',
            guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
          },
          description: 'The screen events module allows user to acces various event regarding the device its screen inside of their Thunkable project.',
          useCases: ['Capture screen swipes/scrolling ', 'Capture resizing', 'Capture orientation changes'],

          notes: { // allows the developer or ai to supply additional notes such as bugs
            'Bug - Module stays visible after setting visible to false': "This is a Thunkable bug, a temporary workaround is to place the module in a group and then hide or show that group."
          },

          demoLinks: { // links to examples users can look at
          },

          platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
          required: ['Physical Mouse/Touchpad or touchscreen, Physical Screen (duh;)'],
          languages: ['Javascript', 'Thunkable Blockly'],

          repo: {
            repoName: 'Mod Docs',
            link: 'https://github.com/lukeplays33/Mod-Docs',
            openSource: 'Open source',
            developerDocs: '',
            developer: 'dreamForge',
            version: '0.0.1',
            status: "Alive", // deperecated/ no-longer maintained or alive or custom

            license: {
              name: 'Apache 2.0',
              link: 'https://httpd.apache.org/docs/2.4/license.html'
            },
          },

        },
        contents: {
          requestFocus: {
            description: 'The requestFocus function allows the developer to manually request listening to screen events, wich automatically stops when interacting with UI elements.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[],
            type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/screenEvents/Method_%20requestFocus.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },
          
          wheel: {
            description: 'The wheel event firesthe user starts scrolling with the mouse wheel.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              deltaX: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The delta value on the Y cordinate',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              deltaX: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],

                description: 'The delta value on the X cordinate.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              deltaZ: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['boolean'],
                inputTypes: [],

                description: 'The delta value on the Z cordinate',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/screenEvents/Event_%20wheel.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          mouseMove: {
            description: 'The mouseMove event fires when the user moves the mouse around on the screen.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              X: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The x coordinate of the mouse.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              Y: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],

                description: 'The y coordinate of the mouse.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              }
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/screenEvents/Event_%20mouseMove.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          resize: {
            description: 'The resize event fires when the user resizes the screen.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/screenEvents/Event_%20resize.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          orientationChange: {
            description: 'The orientationCHange event fires when the user changes the screen orientation',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              orientationAngle: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                outputTypes: ['number'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The angle the screen has rotated to..',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },

            controls: { // tells the docs page to display controls for displayFile
              fullscreen:true,
              play:false,
              console:false,
              viewCode:false,
            },
            
            outputValues:[], // none for events
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: 'https://raw.githubusercontent.com/lukeplays33/Thunkable-Modules/refs/heads/main/assets/screenEvents/Event_%20orientationChange.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },
        },
        //quickLinks: [], //e.g. for quickly navigating to a tutorial
      }
    }
  }
}

export { docsItemsJson }