const CONSOLE_COLOR_CODE = {
    Reset : "\x1b[0m",
    Bright : "\x1b[1m",
    Dim : "\x1b[2m",
    Underscore : "\x1b[4m",
    Blink : "\x1b[5m",
    Reverse : "\x1b[7m",
    Hidden : "\x1b[8m",

    FgBlack : "\x1b[30m",
    FgRed : "\x1b[31m",
    FgGreen : "\x1b[32m",
    FgYellow : "\x1b[33m",
    FgBlue : "\x1b[34m",
    FgMagenta : "\x1b[35m",
    FgCyan : "\x1b[36m",
    FgWhite : "\x1b[37m",

    BgBlack : "\x1b[40m",
    BgRed : "\x1b[41m",
    BgGreen : "\x1b[42m",
    BgYellow : "\x1b[43m",
    BgBlue : "\x1b[44m",
    BgMagenta : "\x1b[45m",
    BgCyan : "\x1b[46m",
    BgWhite : "\x1b[47m",
}

enum LOG_LEVEL {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

class Logger {

    static log(content: any, color = CONSOLE_COLOR_CODE.FgGreen) {
        console.log(`${color}%s\x1b[0m`, JSON.stringify(content));
    }

    static info (content: any) {
        Logger.log(content, CONSOLE_COLOR_CODE.FgGreen);
    }

    static warn (content: any) {
        Logger.log(content, CONSOLE_COLOR_CODE.FgYellow);
    }

    static error (content: any) {
        Logger.log(content, CONSOLE_COLOR_CODE.FgRed);
    }
}

export default Logger;