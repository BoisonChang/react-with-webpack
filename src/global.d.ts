declare module "*.scss";
declare module "*.css";

/*

這兩行是在 global.d.ts 檔案中使用模組聲明，表示 TypeScript 可以將 .scss 和 .css 檔案視為模組（module），從而可以在 TypeScript 程式碼中使用 import 或 require 來引入樣式表。具體來說，這兩行聲明表示：

declare module "*.scss";：告訴 TypeScript，任何以 .scss 為副檔名的檔案都可以被視為一個模組，可以使用 import 或 require 引入。
declare module "*.css";：同上，告訴 TypeScript，任何以 .css 為副檔名的檔案都可以被視為一個模組，可以使用 import 或 require 引入。
這種模組聲明方式常見於前端專案中，因為在開發 Web 應用程式時，通常會使用預處理器（如 Sass）來編寫樣式表，並將其轉換為 CSS 檔案後再使用。在 TypeScript 中，預設是不支援直接引入 .scss 或 .css 檔案的，因此需要使用這種模組聲明方式來告訴 TypeScript 如何處理這些檔案。

*/
