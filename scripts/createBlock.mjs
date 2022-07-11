import * as fs from 'fs/promises';

const blockName = 'Block';
const dir = `./${blockName}`;

const getPath = (fileName, ext) => `./${blockName}/${fileName}.${ext}`;

const callback = (err) => {
    if (err) {
        console.log('Error');
    } else {
        console.log('Success');
    }
};

const tsxContent = `import React, { FC } from 'react';

// const
import { cn${blockName} } from './${blockName}.const';

// styles
import './${blockName}.css';

type ${blockName}Props = {
    className?: string;
};

export const ${blockName}: FC<${blockName}Props> = ({ className }) => {
    return (
        <div className={cn${blockName}(null, [className])}></div>
    );
};
`;

const cssContent = `.${blockName} {

}
`;

const constTsContent = `import { cn } from '@bem-react/classname';

const blockName = '${blockName}';
export const cn${blockName} = cn(blockName);
`;

const indexContent = `export * from './${blockName}';
`;

fs.mkdir(dir);

fs.writeFile(getPath(blockName, 'tsx'), tsxContent, callback);
fs.writeFile(getPath(blockName, 'css'), cssContent, callback);
fs.writeFile(getPath(blockName, 'const.ts'), constTsContent, callback);
fs.writeFile(getPath('index', 'ts'), indexContent, callback);
