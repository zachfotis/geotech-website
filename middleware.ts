import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const locales = ['gr', 'en'];

  const langCookie = request.cookies.get('LOCALE')?.value;
  let currentLocale = langCookie || 'en';

  const pathname = request.nextUrl.pathname;

  // 1. Redirect if there is no locale cookie
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}` && !pathname.includes('.')
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${currentLocale}/${pathname}`, request.url));
  }

  // 2. Redirect if locale in url is not the same as the one in the cookie
  const pathnameIsMissingCurrentLocale =
    !pathname.startsWith(`/${currentLocale}/`) && pathname !== `/${currentLocale}` && !pathname.includes('.');

  if (pathnameIsMissingCurrentLocale) {
    // Replace locale in url with the one in the cookie
    const newUrl = new URL(request.url);
    newUrl.pathname = newUrl.pathname.replace(/^\/[^\/]+/, `/${currentLocale}`);

    return NextResponse.redirect(newUrl);
  }

  // 3. Redirect if request is for an asset and has locale in url
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`));
  const pathnameIsAsset = pathname.includes('.');

  if (pathnameHasLocale && pathnameIsAsset) {
    const newUrl = new URL(request.url);

    const locale = newUrl.pathname.split('/')[1];
    newUrl.pathname = newUrl.pathname.replace(`/${locale}`, '');

    return NextResponse.redirect(newUrl);
  }
}

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'gr'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
});

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|public|_next).*)',
};
