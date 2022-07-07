You can add any svg file to the assets folder then simply run “npm run svgr” to transform your new svg file to a react component ( .js file ).Finally run "npm run build".

In your react project run the following command:
- npm pack ../icons &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Point it to the folder where the package is located.
- npm install icons-1.0.0.tgz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Install the generated file.

Then in your component you have to import Icons from the dependency created in your package.json file after you run the second 
command ( npm install icons-1.0.0.tgz ).

# Example:
```html

import { AppBinDeleteSvgrepoCom } from ‘@icons’;
export default function ( ) {
return(
      <div>
          <AppBinDeleteSvgrepoCom/>
      </div>
  );
}

```
