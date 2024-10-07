import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconCircleCheck, IconFileText, IconPrinter } from '@tabler/icons-react';
import {
  Alert,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Paragraph,
  Strong,
  UnorderedList,
  UnorderedListItem,
  URLData,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from './components/Layout';
import { DenHaagLogo, PageHeaderLogo } from './components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/6 - Succes',
  id: 'wmebv-success',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ logo, theme }: { logo: ReactElement; theme: string }) => (
  <>
    <Layout logo={logo} className={theme}>
      <Alert type="ok">
        <Heading1>
          <Icon>
            <IconCircleCheck size={32} />
          </Icon>
          Uw aanvraag is met succes verstuurd
        </Heading1>
        <Paragraph>Zaaknummer: 2bf9-cne2-9910</Paragraph>
      </Alert>
      <Heading2>Wat gaat er nu gebeuren?</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          U ontvangt een bevestigingsmail op{' '}
          <Strong>
            <URLData>j.vandrouwen@gmail.com</URLData>
          </Strong>
        </UnorderedListItem>
        <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
      </UnorderedList>
      <ButtonGroup direction="column">
        <Link href="#">
          <Icon>
            <IconPrinter />
          </Icon>
          Print uw vraag
        </Link>
        <Link href="/" download="vraag.pdf">
          <Icon>
            <IconFileText />
          </Icon>
          Download uw vraag als PDF
        </Link>
        <Link href="/#">
          Terug naar <URLData>gemeentevoorbeeld.nl</URLData>
        </Link>
      </ButtonGroup>
    </Layout>
  </>
);

export const Default: Story = {
  render: () => <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} />,
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
