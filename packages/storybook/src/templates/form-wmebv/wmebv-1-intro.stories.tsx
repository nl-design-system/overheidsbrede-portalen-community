import { Meta, StoryObj } from '@storybook/react';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  ButtonLink,
  Heading1,
  Heading2,
  Icon,
  Link,
  LinkList,
  LinkListLink,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import { Logo, PageHeaderLogo } from './components/Logo';

const meta = {
  title: 'Templates/WMEBV/1 - Intro',
  id: 'wmebv-1-intro',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ theme }: { theme: string }) => (
  <>
    <div className={`utrecht-document ${theme}`}>
      <PageHeader className="voorbeeld-page-header">
        <div className="todo-page-header__content">
          <PageHeaderLogo />
        </div>
      </PageHeader>
      <PageContent className="todo-page-content">
        <main className={'utrecht-page-content__main'}>
          <Link href="/#" className="voorbeeld-back-link">
            <Icon>
              <IconArrowLeft />
            </Icon>
            Terug
          </Link>
          <Heading1>Vraag aan de gemeente</Heading1>
          <Paragraph lead>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </Paragraph>
          <UnorderedList>
            <UnorderedListItem>Het duurt ongeveer 5 minuten om dit formulier in te vullen.</UnorderedListItem>
            <UnorderedListItem>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</UnorderedListItem>
            <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
            <UnorderedListItem>
              Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
              printen.
            </UnorderedListItem>
          </UnorderedList>
          <ButtonLink appearance="primary-action-button">Doorgaan</ButtonLink>
        </main>
      </PageContent>
      <PageFooter>
        <div className="todo-page-footer__content">
          <div className="todo-footer-content-group">
            <div className="todo-footer-content-block">
              <Logo />
            </div>
            <div className="todo-footer-content-block">
              <Heading2>Contact</Heading2>
              <address className="todo-address utrecht-paragraph">
                Bel <Link href="tel:453453">453 453</Link> (maandag tot en met vrijdag van 09.00 tot 17.00 uur) of stuur
                een e-mail naar{' '}
                <Link href="mailto:vragen@gemeentevoorbeeld.nl">
                  <span className="utrecht-url-data">vragen@gemeentevoorbeeld.nl</span>
                </Link>
                {'.'}
              </address>
            </div>
            <div className="todo-footer-content-block">
              <LinkList>
                <LinkListLink href="/">Bescherming persoonsgegevens</LinkListLink>
                <LinkListLink href="/">Gebruikersvoorwaarden</LinkListLink>
                <LinkListLink href="/">Proclaimer</LinkListLink>
                <LinkListLink href="/">Cookieverklaring</LinkListLink>
              </LinkList>
            </div>
          </div>
        </div>
      </PageFooter>
    </div>
  </>
);

export const Default: Story = {
  render: () => <TemplatePage theme={'voorbeeld-theme'} />,
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage theme={'denhaag-theme'} />,
};
