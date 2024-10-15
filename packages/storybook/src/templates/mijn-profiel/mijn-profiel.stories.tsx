import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import './index.css';
import {
  IconArchive,
  IconBuildingCommunity,
  IconChevronRight,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconLayoutGrid,
  IconParking,
  IconUser,
} from '@tabler/icons-react';
import { FormLabel } from '@utrecht/component-library-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Checkbox,
  FormField,
  Heading1,
  Heading2,
  Heading3,
  Icon,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';
import { ReactElement } from 'react';
import { Layout } from './components/Layout';
import { DenHaagLogo, PageHeaderLogo } from './components/Logo';
import '@gemeente-denhaag/descriptionlist/index.css';

const meta = {
  title: 'Templates/Mijn Profiel/Mijn Gegevens',
  id: 'mijn-profiel-1',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplatePage = ({ logo, theme }: { logo: ReactElement; theme: string }) => (
  <Layout logo={logo} className={theme}>
    <BreadcrumbNav aria-labelledby="hidden-breadcrumb-header">
      <h2 id="hidden-breadcrumb-header" hidden>
        Kruimelpad
      </h2>
      <BreadcrumbNavLink href={'/#'}>Home</BreadcrumbNavLink>
      <BreadcrumbNavSeparator>
        <Icon>
          <IconChevronRight />
        </Icon>
      </BreadcrumbNavSeparator>
      <BreadcrumbNavLink href={'/#'}>Mijn Voorbeeld</BreadcrumbNavLink>
      <BreadcrumbNavSeparator>
        <Icon>
          <IconChevronRight />
        </Icon>
      </BreadcrumbNavSeparator>
      <BreadcrumbNavLink href={'/#'} disabled current>
        Mijn gegevens
      </BreadcrumbNavLink>
    </BreadcrumbNav>
    <div className="todo-profile-page-layout">
      <Sidenav>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconLayoutGrid />
              Home
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconInbox />
              Berichten
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconArchive />
              Lopende zaken
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconCurrencyEuro />
              Belastingzaken
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconHome />
              WOZ
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconParking />
              Parkeren
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/#">
              <IconBuildingCommunity />
              Erfpacht
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/#" current>
              <IconUser />
              Gegevens
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
      </Sidenav>
      <div>
        <Heading1>Uw gegevens</Heading1>
        <section>
          <Heading2>Contact</Heading2>
          <Paragraph>Hier vindt u uw e-mailadres en telefoonnummer waarmee we u kunnen bereiken.</Paragraph>
          <dl className="denhaag-description-list">
            <dt className="denhaag-description-list__title">E-mailadres</dt>
            <dd className="denhaag-description-list__detail">j.vandrouwen@gmail.com</dd>
            <dt className="denhaag-description-list__title">Telefoonnummer</dt>
            <dd className="denhaag-description-list__detail">-</dd>
          </dl>
        </section>
        <section>
          <form>
            <Heading2>Meldingen</Heading2>
            <Paragraph>Stel in waarvoor u meldingen wilt ontvangen en op welke manier.</Paragraph>
            <div>
              <Heading3>Post</Heading3>
              <Paragraph>U ontvangt altijd fysieke post als er een besluit is genomen.</Paragraph>
            </div>
            <div>
              <Heading3>Email</Heading3>
              <Paragraph>U ontvangt altijd fysieke post als er een besluit is genomen.</Paragraph>
              <FormField>
                <FormLabel type="checkbox" checked>
                  <Checkbox /> Ontvang statuswijzigingen per email
                </FormLabel>
              </FormField>
            </div>
          </form>
        </section>
      </div>
    </div>
  </Layout>
);

export const Default: Story = {
  render: () => <TemplatePage logo={<PageHeaderLogo />} theme={'voorbeeld-theme'} />,
};

export const DenHaagTheme: Story = {
  render: () => <TemplatePage logo={<DenHaagLogo />} theme={'denhaag-theme'} />,
};
