// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import {FormInput} from '../Form';

type Props = {
  children: Array<React$Element<typeof Button | typeof FormInput>>,
};

const GroupWrapper = styled.div`
  display: table;
`;

const GroupContentWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Group = (props: Props) => (
  <GroupWrapper>
    {React.Children.map(props.children, child => (
      <GroupContentWrapper>{child}</GroupContentWrapper>
    ))}
  </GroupWrapper>
);

export default Group;
