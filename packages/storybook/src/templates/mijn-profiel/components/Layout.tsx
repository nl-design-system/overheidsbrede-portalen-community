import {
  Heading2,
  Link,
  LinkList,
  LinkListLink,
  PageContent,
  PageFooter,
  PageHeader,
} from '@utrecht/component-library-react/dist/css-module';
import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { Logo, PageHeaderLogo } from './Logo';

interface LayoutProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  logo?: ReactElement;
}

export const Layout = ({ logo, children, className, ...props }: LayoutProps) => {
  return (
    <div className={`utrecht-document ${className}`} {...props}>
      <PageHeader className="voorbeeld-page-header">
        <div className="todo-page-header__content">{logo || <PageHeaderLogo />}</div>
      </PageHeader>
      <PageContent className="todo-page-content">
        <main className={'utrecht-page-content__main'}>{children}</main>
      </PageContent>
      <PageFooter>
        <div className="todo-page-footer__content">
          <div className="todo-footer-content-group">
            <div className="todo-footer-content-block">{logo || <Logo />}</div>
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
  );
};
