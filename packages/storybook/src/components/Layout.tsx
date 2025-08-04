import '@amsterdam/design-system-css/dist/grid/grid.css';
import { Grid, PageFooter } from '@amsterdam/design-system-react';
import { Heading2, Link, PageContent, PageHeader } from '@utrecht/component-library-react/dist/css-module';
import { Root } from '@utrecht/root-react/dist/css';
import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

interface LayoutProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  logo?: ReactElement;
  footerLogo?: ReactElement;
}

export const Layout = ({ logo, children, className, footerLogo, ...props }: LayoutProps) => {
  return (
    <Root className={`utrecht-document ${className}`} {...props}>
      <PageHeader className="voorbeeld-page-header">
        <div className="todo-page-header__content">{logo}</div>
      </PageHeader>
      <PageContent className="todo-page-content">
        <main className={'utrecht-page-content__main'}>{children}</main>
      </PageContent>

      <PageFooter>
        <PageFooter.Spotlight className="ams-page-footer__spotlight">
          <Grid paddingVertical="x-large" className="todo-page-footer__content">
            <Grid.Cell span={3}>
              {footerLogo && <div className="todo-footer-content-block">{footerLogo}</div>}
            </Grid.Cell>
            <Grid.Cell span={3}>
              <div className="todo-footer-content-block">
                <Heading2>Contact</Heading2>
                <address className="todo-address utrecht-paragraph">
                  Bel <Link href="tel:453453">453 453</Link> (maandag tot en met vrijdag van 09.00 tot 17.00 uur) of
                  stuur een e-mail naar{' '}
                  <Link href="mailto:vragen@gemeentevoorbeeld.nl">
                    <span className="utrecht-url-data">vragen@gemeentevoorbeeld.nl</span>
                  </Link>
                  {'.'}
                </address>
              </div>
            </Grid.Cell>
            <Grid.Cell span={3}>
              <PageFooter.Menu className="todo-footer-link-menu">
                <PageFooter.MenuLink className="todo-footer-link" href="/">
                  Over gemeente Voorbeeld
                </PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Nieuwsbrief</PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Social Media</PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Werken bij gemeente Voorbeeld</PageFooter.MenuLink>
              </PageFooter.Menu>
            </Grid.Cell>
            <Grid.Cell span={3}>
              <PageFooter.Menu className="todo-footer-link-menu">
                <PageFooter.MenuLink color="inverse" href="/">
                  Bescherming persoonsgegevens
                </PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Gebruikersvoorwaarden</PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Proclaimer</PageFooter.MenuLink>
                <PageFooter.MenuLink href="/">Cookieverklaring</PageFooter.MenuLink>
              </PageFooter.Menu>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
      </PageFooter>
    </Root>
  );
};
