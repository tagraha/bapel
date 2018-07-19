import Grid from 'components/Grid';
import Row from 'components/Grid';
import Col from 'components/Col';

export { Grid } from 'components/Grid';
export { Row, getRowProps } from 'components/Row';
export { Col, getColumnProps } from 'components/Col';

Grid.Row = Row;
Grid.Col = Col;

export default Grid;