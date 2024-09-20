import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';
import { Layout } from './components/Layout';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/2 - Login',
  id: 'wmebv-2-intro',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ theme }: { theme: string }) => (
  <>
    <Layout className={theme}>
      <Link href="/#" className="voorbeeld-back-link">
        <Icon>
          <IconArrowLeft />
        </Icon>
        Terug
      </Link>
      <Heading1>Vraag aan de gemeente</Heading1>
      <Heading2>Inloggen</Heading2>
      <Paragraph>
        Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed beschermd.
        Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
      </Paragraph>
      <ButtonGroup>
        <Button>Inloggen</Button>
        <Button>Verder gaan zonder inloggen</Button>
      </ButtonGroup>
    </Layout>
  </>
);

export const Default: Story = {
  render: () => <TemplatePage theme={'voorbeeld-theme'} />,
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage theme={'denhaag-theme'} />,
};
