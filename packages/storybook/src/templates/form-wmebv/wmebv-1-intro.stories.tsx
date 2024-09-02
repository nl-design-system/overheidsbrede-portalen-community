import { Meta, StoryObj } from '@storybook/react';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  ButtonLink,
  Heading1,
  Icon,
  Link,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import './index.css';

const meta = {
  title: 'Templates/WMEBV/1 - Intro',
  id: 'wmebv-1-intro',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="utrecht-document voorbeeld-theme">
        <PageContent>
          <main className={'utrecht-page-content__main'}>
            <Link href="/#" className="voorbeeld-back-link">
              <Icon>
                <IconArrowLeft />
              </Icon>
              Terug
            </Link>
            <Heading1>Vraag aan de gemeente</Heading1>
            <Paragraph lead>
              Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden?
              Stel dan uw vraag via het contactformulier.
            </Paragraph>
            <UnorderedList>
              <UnorderedListItem>Het duurt ongeveer 5 minuten om dit formulier in te vullen.</UnorderedListItem>
              <UnorderedListItem>
                Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
              </UnorderedListItem>
              <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
              <UnorderedListItem>
                Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
                printen.
              </UnorderedListItem>
            </UnorderedList>
            <ButtonLink appearance="primary-action-button">Doorgaan</ButtonLink>
          </main>
        </PageContent>
      </div>
    );
  },
};

export const DenHaagThema: Story = {
  render: () => {
    return (
      <div className="utrecht-document denhaag-theme">
        <PageContent>
          <main className={'utrecht-page-content__main'}>
            <Link href="/#" className="voorbeeld-back-link">
              <Icon>
                <IconArrowLeft />
              </Icon>
              Terug
            </Link>
            <Heading1>Vraag aan de gemeente</Heading1>
            <Paragraph lead>
              Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden?
              Stel dan uw vraag via het contactformulier.
            </Paragraph>
            <UnorderedList>
              <UnorderedListItem>Het duurt ongeveer 5 minuten om dit formulier in te vullen.</UnorderedListItem>
              <UnorderedListItem>
                Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
              </UnorderedListItem>
              <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
              <UnorderedListItem>
                Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
                printen.
              </UnorderedListItem>
            </UnorderedList>
            <ButtonLink appearance="primary-action-button">Doorgaan</ButtonLink>
          </main>
        </PageContent>
      </div>
    );
  },
};
