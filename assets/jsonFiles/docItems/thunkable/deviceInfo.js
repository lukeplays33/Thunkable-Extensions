let deviceInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/676d0ceb05584dabb2c0728f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The imgBB module allows you to upload images and gifs to the public imgBB service.',
    useCases: ['Upload images or gifs to an public image service that is free to use.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs
    },

    demoLinks: { // links to examples users can look at
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['imgBB API key'],
    languages: ['Javascript', 'Thunkable Blockly'],

    repo: {
      repoName: 'Thunkable Modules',
      link: 'https://github.com/lukeplays33/Thunkable-Modules',
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
    getDeviceInfo: {
      description: 'The getDeviceInfo() function gathers all available info about the device wich you can then access using the get blocks.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/JqZbk7Z/Screenshot-2025-01-04-154706.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    gotDeviceInfo: {
      description: 'The gotDeviceInfo event fires when information about the device has been succesfully gathered.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/ggPvD5V/Screenshot-2025-01-04-154652.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceLanguage: {
      description: 'The getDeviceLanguage function allows you to see the main language the user has set for its device',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/93MYwMr/Screenshot-2025-01-04-155148.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getBrowserVersion: {
      description: 'The getBrowserVersion function allows you to see information about the browser, if you run your app as a mobile device it will return info about the device its webviewer services.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/5BSBV0P/Screenshot-2025-01-04-155349.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "cookiesEnabled?": {
      description: 'The cookiesEnabled? function allows you to see if the browser has cookies enabled.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/tPzN6DC/Screenshot-2025-01-04-155710.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceCoreOS: {
      description: 'The getDeviceCoreOS function allows you to see what the core OS of the device is (e.g. linux for android)',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/q5LHs1s/Screenshot-2025-01-04-155913.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getUserAgent: {
      description: 'The getUserAgent function returns a string with browser info.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/tHpr7FZ/Screenshot-2025-01-04-160041.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getLogicalProssecorsCores: {
      description: 'The getLogicalProssecorsCores function returns the amount of proccesor cores the device has.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/VST3jJC/Screenshot-2025-01-04-160206.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceMemory: {
      description: 'The getDeviceMemory function allows you to see how much working memory the device has.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/2qqWb0t/Screenshot-2025-01-04-160318.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceLanguages: {
      description: 'The getDeviceLanguages function returns a array of all installed languages on the device.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['array'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/FK9dNZK/Screenshot-2025-01-04-160509.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "isMobile?": {
      description: 'The isMobile? function checks if the device is a mobile device or desktop device. \nNote: some browsers may see tablets as desktop devices.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/fQqf5hy/Screenshot-2025-01-04-160614.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getBrands": {
      description: 'The getBrands function returns a JSOn object with brand information of the browser or webviewer service.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['JSON'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/kKCxsN8/Screenshot-2025-01-04-160746.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getFullDeviceInfoJSON": {
      description: 'The getFullDeviceInfoJSON function returns a JSOn object generated by the getDeviceInfo() function.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['JSON'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/WfWhPCN/Screenshot-2025-01-04-160907.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getScreenColorDepth": {
      description: 'The getScreenColorDepth function returns the color depth of the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/chN25HH/Screenshot-2025-01-04-161015.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getScreenPixelDepth": {
      description: 'The getScreenPixelDepth function returns the pixel depth of the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/94PkhcL/Screenshot-2025-01-04-161220.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { deviceInfo };