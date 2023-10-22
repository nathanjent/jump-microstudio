declare var init: () => void;
declare var update: () => void;
declare var draw: () => void;

type Color =
    `#${string}` |
    `rgb(${number},${number},${number})` |
    `rgba(${number},${number},${number},${number})` |
    `hsl(${number},${number},${number})` |
    `hsla(${number},${number},${number},${number})`;

type MsFont =
    "AESystematic" |
    "Alkhemikal" |
    "AlphaBeta" |
    "Arpegius" |
    "Awesome" |
    "BitCell" |
    "Blocktopia" |
    "Comicoro" |
    "Commodore64" |
    "DigitalDisco" |
    "Edunline" |
    "EnchantedSword" |
    "EnterCommand" |
    "Euxoi" |
    "FixedBold" |
    "GenericMobileSystem" |
    "GrapeSoda" |
    "JupiterCrash" |
    "Kapel" |
    "KiwiSoda" |
    "Litebulb8bit" |
    "LycheeSoda" |
    "MisterPixel" |
    "ModernDos" |
    "NokiaCellPhone" |
    "PearSoda" |
    "PixAntiqua" |
    "PixChicago" |
    "PixelArial" |
    "PixelOperator" |
    "Pixellari" |
    "Pixolde" |
    "PlanetaryContact" |
    "PressStart2P" |
    "RainyHearts" |
    "RetroGaming" |
    "Revolute" |
    "Romulus" |
    "Scriptorium" |
    "Squarewave" |
    "Thixel" |
    "Unbalanced" |
    "UpheavalPro" |
    "VeniceClassic" |
    "ZXSpectrum" |
    "Zepto";

type BlendingMode =
    "normal" |
    "additive" |
    "source-out" |
    "source-atop" |
    "destination-over" |
    "destination-in" |
    "destination-out" |
    "destination-atop" |
    "lighter" |
    "copy" |
    "xor" |
    "multiply" |
    "screen" |
    "overlay" |
    "darken" |
    "lighten" |
    "color-dodge" |
    "color-burn" |
    "hard-light" |
    "soft-light" |
    "difference" |
    "exclusion" |
    "hue" |
    "saturation" |
    "color" |
    "luminosity" |
    "source-over" |
    "source-in";

interface Screen {
    /**
    * The current width of the screen in microStudio units
    */
    width: number;

    /**
    * The current height of the screen in microStudio units
    */
    height: number;

    /**
    * Clears the screen (fills it in black, or in the optional color argument passed)
    */
    clear: (color?: Color) => void;

    /**
    * Sets the color for subsequent drawing operations.
    */
    setColor: (color: Color) => void;

    /**
    * Sets the opacity of subsequent drawing operations, in the range [0 .. 1]
    */
    setAlpha: (opacity: number) => void;

    /**
    * Sets the blending mode for subsequent drawing operations
    */
    setBlending: (blending: BlendingMode) => void;

    /**
    * Sets a linear gradient for subsequent drawing operations
    */
    setLinearGradient: (x1: number, y1: number, x2: number, y2: number, color1: Color, color2: Color) => void;

    /**
    * Sets a radial gradient for subsequent drawing operations
    */
    setRadialGradient: (x: number, y: number, radius: number, color1: Color, color2: Color) => void;

    /**
    * Sets the name of the font to use for subsequent text drawing operations
    */
    setFont: (font_name: MsFont) => void;

    /**
    * Translates the screen coordinates
    */
    setTranslation: (tx: number, ty: number) => void;

    /**
    * Scales the screen coordinates
    */
    setScale: (sx: number, sy: number) => void;

    /**
    * Rotates the screen coordinates
    */
    setRotation: (rotation: number) => void;

    /**
    * Sets the anchor (pivot) point for drawing elements. Range for x and y: [-1 .. 1]
    */
    setDrawAnchor: (x: number, y: number) => void;

    /**
    * Sets a rotation angle for drawing elements, around their anchor point
    */
    setDrawRotation: (rotation: number) => void;

    /**
    * Sets the drawing scale for elements, on their x-axis and y-axis
    */
    setDrawScale: (x: number, y: number) => void;

    /**
    * Draws a filled rectangle
    */
    fillRect: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a filled rounded rectangle
    */
    fillRoundRect: (x: number, y: number, width: number, height: number, roundness: number, color?: Color) => void;

    /**
    * Draws a filled round shape (ellipse or circle depending on your arguments)
    */
    fillRound: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a rectangle outline
    */
    drawRect: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a rounded rectangle outline
    */
    drawRoundRect: (x: number, y: number, width: number, height: number, roundness: number, color?: Color) => void;

    /**
    * Draws a round shape outline (ellipse or circle depending on your arguments)
    */
    drawRound: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a sprite at given coordinates
    */
    drawSprite: (name: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an area of this sprite at given coordinates
    */
    drawSpritePart: (name: string, px: number, py: number, pw: number, ph: number, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an image at given coordinates
    */
    drawImage: (image: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an area of the image at given coordinates
    */
    drawImagePart: (image: string, px: number, py: number, pw: number, ph: number, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws a map at given coordinates
    */
    drawMap: (name: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Sets how sprites or images must be rendered: pixelated or smoothed
    */
    setPixelated: (pixelated: boolean) => void;

    /**
    * Draws text at given coordinates with given size
    */
    drawText: (text: string, x: number, y: number, size: number, color?: Color) => void;

    /**
    * Draws text outline at given coordinates with given size
    */
    drawTextOutline: (text: string, x: number, y: number, size: number, color?: Color) => void;

    /**
    * Returns the width of the given text when drawn at given size
    */
    textWidth: (text: string, size: number) => number;

    /**
    * Sets the width of lines for subsequent drawing operations
    */
    setLineWidth: (width: number) => void;

    /**
    * Sets the line style, as an array of lines and gaps
    */
    setLineDash: (lineStyle: [lines: number, gaps: number]) => void;

    /**
    * Draws a line
    */
    drawLine: (x1: number, y1: number, x2: number, y2: number) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    drawPolygon: (...coordinates: number[], color?: Color) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    drawPolyline: (...coordinates: number[], color?: Color) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    fillPolygon: (...coordinates: number[], color?: Color) => void;

    /**
    * Draws an arc of a circle
    */
    drawArc: (x: number, y: number, radius: number, start_angle: number, end_angle: number, counter_clockwise: boolean, color?: Color) => void;

    /**
    * Fills an arc of a circle
    */
    fillArc: (x: number, y: number, radius: number, start_angle: number, end_angle: number, counter_clockwise: boolean, color?: Color) => void;

    /**
    * You can pass as many points as needed ; you can pass all the points as an array
    * [ x1, y1, cp1x, cp1y, x2, y2, ... ]
    */
    drawQuadCurve: (...points: number[], color?: Color) => void;

    /**
    * You can pass as many points as needed ; you can pass all the points as an array
    * [ x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, ... ]
    */
    drawBezierCurve: (...points: number[], color?: Color) => void;

    /**
    * Sets whether the mouse cursor should be visible
    */
    setCursorVisible: (visible: boolean) => void;

    /**
    * Initiates the loading of a font
    */
    loadFont: (fontname: MsFont) => void;

    /**
    * Checks whether the font is ready to use
    */
    isFontReady: (fontname: MsFont) => boolean;
}

declare const screen: Screen;

interface Keys {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    DIGIT_0,
    DIGIT_1,
    DIGIT_2,
    DIGIT_3,
    DIGIT_4,
    DIGIT_5,
    DIGIT_6,
    DIGIT_7,
    DIGIT_8,
    DIGIT_9,
    F0,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    F_0,
    F_1,
    F_2,
    F_3,
    F_4,
    F_5,
    F_6,
    F_7,
    F_8,
    F_9,
    F_10,
    F_11,
    F_12,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    ARROWUP,
    ARROWDOWN,
    ARROWLEFT,
    ARROWRIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    SPACE,
    MINUS,
    EQUAL,
    QUOTE,
    BACKQUOTE,
    BACKSPACE,
    BACKSLASH,
    SLASH,
    BRACKET_LEFT,
    BRACKET_RIGHT,
    TAB,
    SCROLLLOCK,
    SCROLL_LOCK,
    NUMLOCK,
    NUM_LOCK,
    CAPSLOCK,
    CAPS_LOCK,
    SHIFT,
    SHIFT_LEFT,
    SHIFT_RIGHT,
    CONTROL,
    CONTROL_LEFT,
    CONTROL_RIGHT,
    ALT,
    ALT_LEFT,
    ALT_RIGHT,
    META,
    META_LEFT,
    META_RIGHT,
    ENTER,
    SEMICOLON,
    COMMA,
    PERIOD,
    CONTEXT_MENU,
    CONTEXTMENU,
    ESCAPE,
    PAUSE,
    INSERT,
    DELETE,
    HOME,
    END,
    PAGEUP,
    PAGEDOWN,
    PAGE_UP,
    PAGE_DOWN,
    NUMPAD_0,
    NUMPAD_1,
    NUMPAD_2,
    NUMPAD_3,
    NUMPAD_4,
    NUMPAD_5,
    NUMPAD_6,
    NUMPAD_7,
    NUMPAD_8,
    NUMPAD_9,
    NUMPAD_DIVIDE,
    NUMPAD_MULTIPLY,
    NUMPAD_SUBTRACT,
    NUMPAD_ADD,
    NUMPAD_ENTER,
};

interface Buttons {
    A,
    B,
    X,
    Y,
    LB,
    RB,
    VIEW,
    MENU,
    DPAD_UP,
    DPAD_DOWN,
    DPAD_LEFT,
    DPAD_RIGHT,
    UP,
    DOWN,
    LT,
    RT,
    LEFT_STICK__UP,
    LEFT_STICK__DOWN,
    LEFT_STICK__LEFT,
    LEFT_STICK__RIGHT,
    RIGHT_STICK__UP,
    RIGHT_STICK__DOWN,
    RIGHT_STICK__LEFT,
    RIGHT_STICK__RIGHT,
    LEFT_STICK__ANGLE,
    LEFT_STICK__AMOUNT,
    RIGHT_STICK__ANGLE,
    RIGHT_STICK__AMOUNT,
}

interface MsGamePad extends Buttons {
    [index: number]: MsGamePad;
    length: number;
    press: Buttons,
    release: Buttons,
}

interface MsKeyBoard extends Keys {
    press: Keys,
    release: Keys,
}

/**
 * Keyboard inputs can be tested using the keyboard object.
 */
declare const keyboard: MsKeyBoard;

/**
 *The status of the buttons and joysticks on the controller (gamepad) can be tested using the "gamepad" object.
 */
declare const gamepad: MsGamePad;

interface MsTouch {
    touching: boolean;
    press: boolean;
    release: boolean;
    x: number;
    y: number;
    /** list of all current active touches */
    touches: MsTouch[];
}

/**
 * The touch inputs can be tested with the "touch" object (which also reports the state of the mouse).
 */
declare const touch: MsTouch;

interface MsMouse {
    /** current mouse pointer position x */
    x: number;

    /** current mouse pointer position y */
    y: number;

    /** 1 if any mouse button is pressed, else 0 */
    pressed: 0 | 1;

    /** 1 if left mouse button is pressed, else 0 */
    left: 0 | 1;

    /** 1 if middle mouse button is pressed, else 0 */
    middle: 0 | 1;

    /** 1 if right mouse button is pressed, else 0 */
    right: 0 | 1;

    /** value can be 1 (up), -1 (down) or 0 */
    wheel: 1 | 0 | -1;

    /** 1 if any mouse button was just first pressed */
    press: 0 | 1;

    /** 1 when the last active mouse button was just released */
    release: 0 | 1;
}

/**
* The mouse inputs can be tested with the mouse object (which also reports touch events).
*/
declare const mouse: MsMouse;

interface Loader {
    ready: boolean;
}

interface MsAssetManager {
    /**
    * Initiates loading of the font asset
    */
    loadFont: (path: string) => void;

    /**
    * Loads image, returns a loader object and calls callback when ready
    */
    loadImage: (path: string, callback: (data: any) => void) => {data: any, ready: boolean};

    /**
    * Loads 3D model, returns a loader object and calls callback when ready
    */
    loadModel: (path: string, callback: (container: any) => void) => {container: any, ready: boolean};

    /**
    * Loads JSON as microScript object, returns a loader object and calls callback when ready
    */
    loadJSON: (path: string, callback: (data: any) => void) => {data: any, ready: boolean};

    /**
    * Loads TXT as microScript string, returns a loader object and calls callback when ready
    */
    loadText: (path: string, callback: (text: any) => void) => {text: any, ready: boolean};

    /**
    * Loads CSV as microScript string, returns a loader object and calls callback when ready
    */
    loadCSV: (path: string, callback: (text: any) => void) => {text: any, ready: boolean};
}

declare const asset_manager: MsAssetManager;

interface RGBComponents {
    R: number;
    G: number;
    B: number;
}

interface MsImage {
    /**
    * Width of the image in pixels
    */
    width: number;

    /**
    * Height of the image in pixels
    */
    height: number;

    /**
    * Clears the image
    */
    clear: (color?: Color) => void;

    /**
    * Sets pixel color
    */
    setRGB: (x: number, y: number, r: number, g: number, b: number) => void;

    /**
    * Sets pixel color and opacity
    */
    setRGBA: (x: number, y: number, r: number, g: number, b: number, a: number) => void;

    /**
    * Returns pixel color as an object with R, G and B components
    */
    getRGB: (x: number, y: number) => RGBComponents;

    /**
    * Returns pixel color as an object with R, G, B and A components
    */
    getRGBA: (x: number, y: number) => RGBComponents;

    /**
    * Sets the color for subsequent drawing operations.
    */
    setColor: (color: Color) => void;

    /**
    * Sets the opacity of subsequent drawing operations, in the range [0 .. 1]
    */
    setAlpha: (opacity: number) => void;

    /**
    * Sets the blending mode for subsequent drawing operations
    */
    setBlending: (blending: BlendingMode) => void;

    /**
    * Sets a linear gradient for subsequent drawing operations
    */
    setLinearGradient: (x1: number, y1: number, x2: number, y2: number, color1: Color, color2: Color) => void;

    /**
    * Sets a radial gradient for subsequent drawing operations
    */
    setRadialGradient: (x: number, y: number, radius: number, color1: Color, color2: Color) => void;

    /**
    * Sets the name of the font to use for subsequent text drawing operations
    */
    setFont: (font_name: MsFont) => void;

    /**
    * Translates the image coordinates
    */
    setTranslation: (tx: number, ty: number) => void;

    /**
    * Scales the image coordinates
    */
    setScale: (sx: number, sy: number) => void;

    /**
    * Rotates the image coordinates
    */
    setRotation: (rotation: number) => void;

    /**
    * Sets the anchor (pivot) point for drawing elements. Range for x and y: [-1 .. 1]
    */
    setDrawAnchor: (x: number, y: number) => void;

    /**
    * Sets a rotation angle for drawing elements, around their anchor point
    */
    setDrawRotation: (rotation: number) => void;

    /**
    * Sets the drawing scale for objelements, on their x-axis and y-axis
    */
    setDrawScale: (x: number, y: number) => void;

    /**
    * Draws a filled rectangle
    */
    fillRect: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a filled rounded rectangle
    */
    fillRoundRect: (x: number, y: number, width: number, height: number, roundness: number, color?: Color) => void;

    /**
    * Draws a filled round shape (ellipse or circle depending on your arguments)
    */
    fillRound: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a rectangle outline
    */
    drawRect: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a rounded rectangle outline
    */
    drawRoundRect: (x: number, y: number, width: number, height: number, roundness: number, color?: Color) => void;

    /**
    * Draws a round shape outline (ellipse or circle depending on your arguments)
    */
    drawRound: (x: number, y: number, width: number, height: number, color?: Color) => void;

    /**
    * Draws a sprite at given coordinates
    */
    drawSprite: (name: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an area of this sprite at given coordinates
    */
    drawSpritePart: (name: string, px: number, py: number, pw: number, ph: number, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an image at given coordinates
    */
    drawImage: (image: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws an area of the image at given coordinates
    */
    drawImagePart: (image: string, px: number, py: number, pw: number, ph: number, x: number, y: number, width: number, height?: number) => void;

    /**
    * Draws a map at given coordinates
    */
    drawMap: (name: string, x: number, y: number, width: number, height?: number) => void;

    /**
    * Sets how sprites or images must be rendered: pixelated or smoothed
    */
    setPixelated: (pixelated: boolean) => void;

    /**
    * Draws text at given coordinates with given size
    */
    drawText: (text: string, x: number, y: number, size: number, color?: Color) => void;

    /**
    * Draws text outline at given coordinates with given size
    */
    drawTextOutline: (text: string, x: number, y: number, size: number, color?: Color) => void;

    /**
    * Returns the width of the given text when drawn at given size
    */
    textWidth: (text: string, size: number) => number;

    /**
    * Sets the width of lines for subsequent drawing operations
    */
    setLineWidth: (width: number) => void;

    /**
    * Sets the line style, as an array of lines and gaps
    */
    setLineDash: (lineStyle: [lines: number, gaps: number]) => void;

    /**
    * Draws a line
    */
    drawLine: (x1: number, y1: number, x2: number, y2: number) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    drawPolygon: (...coordinates: number[], color?: Color) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    drawPolyline: (...coordinates: number[], color?: Color) => void;

    /**
    * The coordinates can also be passed as an array
    * [ x1, y1, x2, y2, x3, y3, ... ]
    */
    fillPolygon: (...coordinates: number[], color?: Color) => void;

    /**
    * Draws an arc of a circle
    */
    drawArc: (x: number, y: number, radius: number, start_angle: number, end_angle: number, counter_clockwise: boolean, color?: Color) => void;

    /**
    * Fills an arc of a circle
    */
    fillArc: (x: number, y: number, radius: number, start_angle: number, end_angle: number, counter_clockwise: boolean, color?: Color) => void;

    /**
    * You can pass as many points as needed ; you can pass all the points as an array
    * [ x1, y1, cp1x, cp1y, x2, y2, ... ]
    */
    drawQuadCurve: (...points: number[], color?: Color) => void;

    /**
    * You can pass as many points as needed ; you can pass all the points as an array
    * [ x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, ... ]
    */
    drawBezierCurve: (...points: number[], color?: Color) => void;
}

declare class msImage implements MsImage {
    constructor(width: number, height: number) {}
}

interface MsSprite {
    /** The width of the sprite in pixels */
    width: number;

    /** The height of the sprite in pixels */
    height: number;

    /** 1 when the sprite is fully loaded, 0 otherwise */
    ready: 0 | 1;

    /** Name of the sprite */
    name: string;

    /** Change the animation speed in case of an animated sprite */
    fps: number;

    /** Sets the current animation frame */
    setFrame: (frame: number) => void;

    /** Get the MsImage object of the first (or only) sprite frame */
    frames: MsImage | MsImage[];
}

/**
* Default global object sprites retains all project sprites
*/
declare const sprites: Record<string, MsSprite>;

interface MsMap {
    /** The width of the map in cells */
    width: number;

    /** The height of the map in cells */
    height: number;

    /** The width of the map cell in pixels */
    block_width: number;

    /** The height of the map cell in pixels */
    block_height: number;

    /** 1 when the map is fully loaded, 0 otherwise */
    ready: 0 | 1;

    /** Name of the map */
    name: string;

    /**
     * Returns the name of the sprite in cell (x,y) ; coordinates origin is (0,0), located at the bottom left of the map. Returns 0 if cell is empty
     */
    get: (x: number, y: number) => string;

    /**
     *Sets a new sprite in cell (x,y) ; coordinates origin is (0,0), located at the bottom left of the map. Third parameter is the name of the sprite.
     */
    set: (x: number, y: number, name: string) => void;

    /**
     * Returns a new map which is a full copy of this map.
     */
    clone: () => MsMap;
}

declare class Map implements MsMap {
    constructor(width_in_tiles: number, height_in_tiles: number, tile_pixel_width: number, tile_pixel_height: number) {}
}

/**
* Default global object maps retains all project maps
*/
declare const maps: Record<string, MsMap>;

interface MsFile {
    content: string;
}

interface MsSystem {
    /**
    * Returns the system time in milliseconds (time elapsed since January 1st 1970)
    */
    time: () => number;

    /**
    * Returns the language of the user
    */
    language: () => string;

    /**
    * Allows to check which input methods are available on the user's system
    */
    inputs: () => {
        /** Returns 1 if the user's system has a keyboard */
        keyboard: 0 | 1;

        /** Returns 1 if the user's system has a mouse pointer */
        mouse: 0 | 1;

        /** Returns 1 if the user's system has a touch screen */
        touch: 0 | 1;

        /** Returns 1 if there is at least one plugged in, active gamepad */
        gamepad: 0 | 1;
    };

    /**
    * Prompts the user to enter text and calls callback( ok, text )
    */
    prompt: (text: string, callback: (ok: string, text: string) => void) => void;

    /**
    * Displays a message to the user, in a dialog box
    */
    say: (text: string) => void;

    /**
    * Pauses execution. Execution can be resumed with the "play" button in the microStudio interface
    */
    pause: () => void;

    /**
    * Exits the program
    */
    exit: () => void;

    /**
    * Set to 1 by default, can be set to 0 to make the threading system non-preemptive
    */
    preemptive: 0 | 1;

    /**
    * Holds a list of all the active threads (running or paused).
    * @deprecated not documented in the API reference
    */
    threads: object[];

    /**
    * Writable call rate of update(), example: system.update_rate = 120
    */
    update_rate: number;

    /**
     * Gives the current effective frame rate.
     */
    fps: () => number;

    file: {
        load: (types: string[], callback: (file_list: MsFile[]) => void) => void;

        /**
         * saves your object as a json file
         */
        save: (data: object, name: string) => void;

        /**
         * Saves the image to the PC. Format can be set to "png" or "jpg" and quality (jpg only) in the range [0 .. 1]
         */
        save: (data: MsImage, name: string, format?: "png" | "jpg", quality: number) => void;

        dropped: MsFile[];

        loaded: MsFile[];
    };
}

declare const system: MsSystem;

interface MsSound {
    /** Writes sample data */
    write: (channel, index, value) => void;

    /** Reads sample data */
    read: (channel, index) => void;

    play: (volume?, pitch?, pan?, loop?) => void;

    /**
    * sets the volume for the playback of the sound
    */
    setVolume: (volume) => void;

    /**
    * sets the pitch for the playback of the sound
    */
    setPitch: (pitch) => void;

    /**
    * sets the pan of the playing sound
    */
    setPan: (pan) => void;

    /**
    * returns the duration of the sound in seconds
    */
    getDuration: () => number;

    /**
    * stops the playback of the sound
    */
    stop: () => void;
}
declare class Sound implements MsSound {
    constructor(channels, length, sampleRate) {}
}

interface MsMusic {
    /**
     * Changes the playback volume of the music (value ranging from 0 to 1)
     */
    setVolume: (volume: number) => void;

    /**
     * Stops the playback of that music
     */
    stop: () => void;

    /**
     * Resumes the playback is you stopped it before
     */
    play: () => void;

    /** 
     * Returns the total music duration in seconds
     */
    getDuration: () => number;

    /** 
     * Returns the current playback position in seconds
     */
    getPosition: () => number;

    /** 
     * Sets the current playback position in seconds
     */
    setPosition: (position: number) => void;
}

interface MsAudio {
    /**
     * Command  | Description
     * saw      | indicates the type of sound generator (sound color), possible values: saw, sine, square, noise
     * duration | followed by a number of milliseconds indicates the duration of the notes
     * tempo    | followed by a number of notes per minute, indicates the tempo
     * span     | followed by a number between 1 and 100, indicates the percentage of keeping each note
     * volume   | followed by a number between 0 and 100, sets the volume
     * C        | or D, E, F etc. indicates a note to be played. It is possible to indicate the octave also, example C5 for the C of the 5th octave of the keyboard.
     * loop     | followed by a number, indicates the number of times the following sequence will have to be repeated. The sequence ends with the keyword end example: loop 4 C4 E G end; the number 0 means that the loop must be repeated indefinitely.
     */
    beep: (audio_command: string) => void;

    /**
     * Cancels all sounds being played by the beeper. Useful for muting the sound after having started music loops.
     */
    cancelBeeps: () => void;

    /**
     * Starts playing the sound with the given name and returns a controller object
     * @param name The name of the sound (from the sounds tab of your project) to play
     * @param volume The output volume for this sound playback, ranging from 0 to 1
     * @param pitch The output pitch for this sound playback, 1 is the default pitch
     * @param pan The pan setting for this sound playback, ranging from -1 (left) to 1 (right)
     * @param loop Set to 1 (true) if you want the sound to loop indefinitely
     */
    playSound: (name: string, volume?: number, pitch?: number, pan?: number, loop?: 0 | 1) => MsSound;

    /**
     * Starts playing the music with the given name and returns a controller object
     * @param name The name of the music (from the music tab of your project) to play
     * @param volume The output volume for this music playback, ranging from 0 to 1
     * @param loop Set to 1 (true) if you want the music to loop indefinitely
     */
    playMusic: (name: string, volume?: number, loop?: 0 | 1) => MsMusic;
}
declare const audio: MsAudio;

interface MsStorage {
    /**
     * Stores your value permanently, referenced by the string name. The value can be any number, string, list or structured object.
     */
    set: (name: string, value: number | string | object | object[]) => void;

    /**
    * Returns the value permanently recorded under reference string name. Returns 0 when no such record exists.
    */
    get: (name: string) => number | string | object | object[];

}

/**
 * The storage object allows for the permanent storage of your application data. You can use it to store user progress, highscores or other status information about your game or project.
 */
declare const storage: MsStorage;
