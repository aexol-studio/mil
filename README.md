You can add any svg file to the assets folder then simply run “npm run svgr” and this will transform your new svg file to a react component ( .js file ).

$ npm pack ../icons                      // Point it to the folder where the package is located.
$ npm install icons-1.0.0.tgz // Point it to the generated file.

Then in your component you have to import Icons from the dependency created in your package.json file after your run the second command ( npm install icons-1.0.0.tgz ).

Example:

Import { Heart } from ‘@icons’;
export default function ( ) {
return(
<div>
<Heart/>
</div>
);
}
