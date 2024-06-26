// Type definitions for @testing-library/jest-dom 5.14
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import type { TestingLibraryMatchers } from './matchers';

declare global {
    namespace jest {
        // eslint-disable-next-line @typescript-eslint/ban-types
        interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
    }
}
