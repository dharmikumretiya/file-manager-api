/*
======================================================
 📌 EXPORTS & IMPORTS CHEAT SHEET
======================================================

1. EXPORT BASICS
----------------
- Use "export default" when the file has ONE main thing.
  Example:
    export default function Controller() {}

- Use "export { ... }" (named exports) when the file has
  MULTIPLE utilities.
  Example:
    export const add = () => {}
    export const sub = () => {}

------------------------------------------------------

2. IMPORT BASICS
----------------
- If file has a DEFAULT export:
    import AnyNameYouWant from "./file.js"

- If file has NAMED exports:
    import { exactName } from "./file.js"

- If file has BOTH:
    import DefaultThing, { named1, named2 } from "./file.js"

------------------------------------------------------

3. BARRELS (index.js)
----------------------
Barrel = re-exporting things from multiple files
into one central file (usually index.js).

- Re-export DEFAULT export:
    export { default as Controller } from "./fileUpload.controller.js"

    ✅ Import like this:
       import { Controller } from "./controllers/index.js"

- Re-export NAMED export:
    export { fileUploadController } from "./fileUpload.controller.js"

    ✅ Import like this:
       import { fileUploadController } from "./controllers/index.js"
import default from './index';

------------------------------------------------------

4. RULE OF THUMB
----------------
- One main thing in a file → use `export default`
- Multiple utilities in a file → use `export { ... }`
- For barrels (index.js):
    • Default export  → export { default as Name } from "./file.js"
    • Named export    → export { Name } from "./file.js"

======================================================
*/

export {default as fileRouter}  from './files.route.js';