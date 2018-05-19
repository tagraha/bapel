// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import StyleMatcher from '../Utils/Matcher';

type WidthVariant = 'default' | 'wide' | 'half' | 'tierce' | 'quarter';

const sizeMatcher = StyleMatcher.create('variant', [
  ['wide', '100%'],
  ['half', '50%'],
  ['tierce', '33.3%'],
  ['quarter', '25%'],
]);

const TRow = styled.div`
  display: table;

  ${props =>
    props.variant === 'wide' &&
    css`
      width: ${sizeMatcher};
    `};
`;

const TableRow = (props: {variant: WidthVariant, children: React$Node}) => (
  <TRow variant={props.variant}>{props.children}</TRow>
);

TableRow.defaultProps = {
  variant: 'default',
};

const TColumn = styled.div`
  display: table-cell;
  vertical-align: ${props => props.verticalAlign};

  ${props =>
    props.relative &&
    css`
      position: relative;
    `};

  ${props =>
    props.variant &&
    css`
      width: ${sizeMatcher};
    `};
`;

const TableColumn = (props: {
  className?: string,
  variant: WidthVariant,
  children: React$Node,
  style: Object,
  relative: boolean,
  verticalAlign: 'top' | 'middle' | 'bottom',
}) => (
  <TColumn
    relative={props.relative}
    className={props.className}
    variant={props.variant}
    style={props.style}
    verticalAlign={props.verticalAlign}>
    {props.children}
  </TColumn>
);

TableColumn.defaultProps = {
  variant: 'default',
  relative: false,
  style: {},
  verticalAlign: 'middle',
};

const RowDiv = styled.div`
  overflow: hidden;
  ${props =>
    !props.noMargin &&
    css`
      margin: 0 -0.8rem;
    `};
`;

const ColumnDiv = styled.div`
  float: left;
  ${props =>
    !props.noPadding &&
    css`
      padding: 0 0.8rem;
    `};
  ${props =>
    props.variant &&
    css`
      width: ${sizeMatcher};
    `};
`;

const Column = (props: {
  noPadding: boolean,
  variant: WidthVariant,
  children: React$Node,
}) => (
  <ColumnDiv noPadding={props.noPadding} variant={props.variant}>
    {props.children}
  </ColumnDiv>
);

Column.defaultProps = {
  noPadding: false,
};

const Row = (props: {children: React$Node, noMargin: boolean}) => (
  <RowDiv noMargin={props.noMargin}>{props.children}</RowDiv>
);

Row.defaultProps = {
  noMargin: false,
};

export default Row;
export {TableColumn, TableRow, Row, Column};
