const indexJs = (name: string) => `import ${name} from './${name}';

export {
  ${name} as default
}
`

const nameJs = (name: string) => `// @flow
import React, { Component } from 'react';

type Props = {

}

class ${name} extends Component<Props> {
  state = {  }
  render() {
    return (
      <div>
        ${name}
      </div>
    );
  }
}

${name}.defaultProps = {

}

export default ${name};
`

const nameTestJs = (name: string) => `/* eslint-env jest */

import React from 'react';
import { mountWithTheme } from 'utils/testFuncs';
import ${name} from '.';

describe('${name} component', () => {
    it('renders without crashing', () => {
        const wrapper = mountWithTheme(<${name} />);
        expect(wrapper).toMatchSnapshot();
    });
});
`

const nameMdxJs = (name: string) => `---
name: ${name}
route: /${name}
---
import { PropsTable, Playground } from 'docz';

import ${name} from '.';

# ${name}

<${name} />

<Playground>

</Playground>

<PropsTable of={${name}} />
`

export {
  indexJs,
  nameJs,
  nameTestJs,
  nameMdxJs
}
