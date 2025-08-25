import { CaseCard } from '@gemeente-denhaag/card';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { Heading2 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Templates/Patronen/Zaken/Zakenoverzicht',
  id: 'generic-overview',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ZakenOverzicht = () => (
  <section>
    <Heading2>Lopende zaken</Heading2>
    <div className={'todo-card-layout'}>
      <CaseCard title={'Aanvraag subsidie geluidsisolatie'} href={'#'} date={'2020-10-18T07:34'} />
      <CaseCard title={'Aanvraag parkeervergunning'} href={'#'} date={'2020-11-05T07:34'} />
    </div>
  </section>
);

export const Default: Story = {
  render: () => (
    <div className={'denhaag-theme'}>
      <ZakenOverzicht />
    </div>
  ),
};
