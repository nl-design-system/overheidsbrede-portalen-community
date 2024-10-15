import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@utrecht/design-tokens/dist/theme.css';
import './index.css';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  HeadingGroup,
  Icon,
  Link,
  LinkButton,
  LogoImage,
  Paragraph,
  PreHeading,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from './components/Layout';
import { DenHaagLogo, PageHeaderLogo } from './components/Logo';
import { VoorbeeldFooterLogo } from '../mijn-profiel/components/Logo';

const meta = {
  title: 'Templates/Meerstappenformulier/WMEBV Contactformulier/4 - Stap 2',
  id: 'wmebv-3-step-2',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({
  logo,
  theme,
  footerLogo,
}: {
  logo?: ReactElement;
  theme: string;
  footerLogo?: ReactElement;
}) => (
  <>
    <Layout logo={logo} className={theme} footerLogo={footerLogo}>
      <Link href="/#" className="voorbeeld-back-link">
        <Icon>
          <IconArrowLeft />
        </Icon>
        Terug
      </Link>
      <Heading1>Vraag aan de gemeente</Heading1>
      <HeadingGroup>
        <PreHeading>Stap 2 van 4</PreHeading>
        <Heading2>Uw gegevens</Heading2>
      </HeadingGroup>
      <Paragraph>
        Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet met
        anderen gedeeld.
      </Paragraph>
      <>
        <FormField className="todo-form-field">
          <FormLabel htmlFor="nameField">Naam</FormLabel>
          <Textbox id="nameField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="streetField">Straat</FormLabel>
          <Textbox id="streetField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="houseField">Huisnummer</FormLabel>
          <Textbox id="houseField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="houseAdditionField">Toevoeging</FormLabel>
          <FormFieldDescription>Niet verplicht.</FormFieldDescription>
          <Textbox id="houseAdditionField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="postcodeField">Postcode</FormLabel>
          <Textbox id="postcodeField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="placeField">Woonplaats</FormLabel>
          <Textbox id="placeField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="emailField">E-mailadres</FormLabel>
          <Textbox id="emailField"></Textbox>
        </FormField>

        <FormField className="todo-form-field">
          <FormLabel htmlFor="phoneField">Telefoonnummer</FormLabel>
          <FormFieldDescription>Niet verplicht.</FormFieldDescription>
          <Textbox id="phoneField"></Textbox>
        </FormField>
      </>

      <ButtonGroup direction="column">
        <Button type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
          Volgende stap
        </Button>
        <LinkButton inline className="voorbeeld-button-link">
          Opslaan en later verder
        </LinkButton>
        <LinkButton inline className="voorbeeld-button-link">
          Stoppen met formulier
        </LinkButton>
      </ButtonGroup>
    </Layout>
  </>
);

export const Default: Story = {
  render: () => (
    <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} footerLogo={<VoorbeeldFooterLogo />} />
  ),
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};

export const UtrechtTheme: Story = {
  render: () => <TemplatePage logo={<LogoImage />} theme={'utrecht-theme'} />,
};
