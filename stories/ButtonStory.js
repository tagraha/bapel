// @flow
import React from 'react';

import {Group} from '../src/Common';
import Text from '../src/Text';
import Button from '../src/Button';
import Icon, {Icons} from '../src/Icon';
import Provider from './Provider';
import {action} from '@storybook/addon-actions';

const IconBullHornBlack = (
  <Icon>
    <img
      src="http://mockup.sistemsista.com/icon/png/black/icon-bullhorn.png"
      alt=""
    />
  </Icon>
);

const IconBullHornWhite = (
  <Icon>
    <img
      src="http://mockup.sistemsista.com/icon/png/white/icon-bullhorn.png"
      alt=""
    />
  </Icon>
);

const ButtonStory = () => (
  <Provider>
    <div className="doc-mainbar">
      <h1>Buttons</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="2">
              props: <code>size</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>default</code>
            </td>
            <td>
              <Button onClick={action('default button')}>Default</Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>small</code>
            </td>
            <td>
              <Button size="small" onClick={action('small button')}>
                Small
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>xsmall</code>
            </td>
            <td>
              <Button size="xsmall" onClick={action('xsmall button')}>
                XSmall
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="3">
              props: <code>variant</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>default</code>
            </td>
            <td colSpan="2">
              <Button onClick={action('default button')}>Default</Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>primary</code>
            </td>
            <td colSpan="2">
              <Button variant="primary" onClick={action('primary button')}>
                Primary
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <code>line</code>
            </td>
            <td colSpan="2">
              <Button variant="line" onClick={action('line button')}>
                Line
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <code>danger</code>
            </td>
            <td>
              <Button variant="danger" onClick={action('danger button')}>
                Danger
              </Button>
            </td>
            <td>
              <Button variant="danger" onClick={action('danger button')}>
                <Text color="regular">Danger Text Override</Text>
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <code>link</code>
            </td>
            <td>
              <Button variant="link" onClick={action('link button')}>
                link
              </Button>
            </td>
            <td>
              <Button variant="link" onClick={action('link button color cyan')}>
                <Text color="cyan">link text override</Text>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="4">Presentation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Left icon</td>
            <td>
              <Button
                variant="primary"
                icon={IconBullHornWhite}
                onClick={action('left icon button size default')}>
                Notification
              </Button>
            </td>
            <td>
              <Button
                variant="primary"
                size="small"
                icon={IconBullHornWhite}
                onClick={action('left icon button size small')}>
                Notification
              </Button>
            </td>
            <td>
              <Button
                variant="primary"
                size="xsmall"
                icon={IconBullHornWhite}
                onClick={action('left icon button size xsmall')}>
                Notification
              </Button>
            </td>
          </tr>

          <tr>
            <td>Right icon</td>
            <td>
              <Button
                variant="primary"
                icon={IconBullHornWhite}
                iconPosition="right"
                onClick={action('right icon button size default')}>
                Notification
              </Button>
            </td>
            <td>
              <Button
                variant="primary"
                size="small"
                icon={IconBullHornWhite}
                iconPosition="right"
                onClick={action('right icon button size small')}>
                Notification
              </Button>
            </td>
            <td>
              <Button
                variant="primary"
                size="xsmall"
                icon={IconBullHornWhite}
                iconPosition="right"
                onClick={action('right icon button size xsmall')}>
                Notification
              </Button>
            </td>
          </tr>

          <tr>
            <td>Icon only</td>
            <td>
              <Button
                icon={<Icons name="18-plus" />}
                onClick={action('icon only size default')}
              />
            </td>
            <td>
              <Button
                size="small"
                icon={<Icons name="18-plus" />}
                onClick={action('icon only size small')}
              />
            </td>
            <td>
              <Button
                size="xsmall"
                icon={<Icons name="18-plus" />}
                onClick={action('icon only size xsmall')}
              />
            </td>
          </tr>

          <tr>
            <td>Button block</td>
            <td colSpan="3">
              <Button variant="primary" block onClick={action('block button')}>
                Button
              </Button>
            </td>
          </tr>

          <tr>
            <td>Button block icon</td>
            <td colSpan="3">
              <Button
                variant="primary"
                icon={IconBullHornWhite}
                block
                onClick={action('block icon button')}>
                Button
              </Button>
            </td>
          </tr>

          <tr>
            <td>Button round</td>
            <td colSpan="3">
              <Button
                variant="primary"
                icon={IconBullHornWhite}
                round
                onClick={action('round button')}>
                Button
              </Button>
            </td>
          </tr>

          <tr>
            <td>Disabled</td>
            <td colSpan="3">
              <Button
                icon={IconBullHornBlack}
                disabled
                onClick={action('round button')}>
                Button
              </Button>
            </td>
          </tr>

          <tr>
            <td>Icon &amp; Notification</td>
            <td colSpan="3">
              <Button
                icon={IconBullHornWhite}
                variant="primary"
                notificationValue={9}
                onClick={action('notification button')}>
                Button
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="3">Extras</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Button group</td>
            <td>
              <Group>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  position="left"
                  onClick={action('button group icon left')}>
                  Line
                </Button>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  position="middle"
                  onClick={action('button group icon middle')}>
                  Line
                </Button>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  position="right"
                  onClick={action('button group icon right')}>
                  Line
                </Button>
              </Group>
            </td>
            <td>
              <Group>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  position="left"
                  onClick={action('button group icon left')}>
                  Line
                </Button>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  position="right"
                  onClick={action('button group icon right')}>
                  Line
                </Button>
              </Group>
            </td>
          </tr>

          <tr>
            <td>Button group small</td>
            <td colSpan="2">
              <Group>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  size="small"
                  position="left"
                  onClick={action('button group icon left small')}>
                  Line
                </Button>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  size="small"
                  position="middle"
                  onClick={action('button group icon middle small')}>
                  Line
                </Button>
                <Button
                  icon={<Icons name="sosmed-facebook" />}
                  size="small"
                  position="right"
                  onClick={action('button group icon right small')}>
                  Line
                </Button>
              </Group>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Provider>
);

export default ButtonStory;
