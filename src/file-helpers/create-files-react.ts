const indexJs = (name: string) => `import ${name} from './${name}';

export {
  ${name} as default
}
`

const nameJs = (name: string) => `// @flow
import React, { Component } from 'react';
import { WrapperStyled } from './${name}.style';

type Props = {

}

class ${name} extends Component<Props> {
  state = {  }
  render() {
    return (
      <WrapperStyled>
        ${name}
      </WrapperStyled>
    );
  }
}

${name}.defaultProps = {

}

export default ${name};
`

const nameStyleJs = () => `import styled from 'styled-components';

const WrapperStyled = styled.div\`
  padding: 24px;
  background-color: tomato;
\`;

export { WrapperStyled }
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
  nameStyleJs,
  nameMdxJs
}
