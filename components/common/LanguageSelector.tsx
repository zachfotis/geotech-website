'use client';

import FlagEN from 'assets/icons/flag-en.png';
import FlagGR from 'assets/icons/flag-gr.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LanguageSelector() {
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Get locale from cookie
    const locale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('LOCALE'))
      ?.split('=')[1];

    if (!locale) {
      // Set default locale
      document.cookie = 'LOCALE=en ; path=/';
      setLanguage('en');
    } else {
      setLanguage(locale);
    }
  }, []);

  if (language === null) return null;

  return (
    <div className="text-black flex justify-start items-center gap-1">
      <label htmlFor="lang">
        {language === 'gr' ? (
          <Image src={FlagGR} alt="Greek Flag" width={20} height={20} />
        ) : (
          <Image src={FlagEN} alt="English Flag" width={20} height={20} />
        )}
      </label>
      <select
        name="languages"
        id="lang"
        className="border-none text-sm"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          // Set locale in cookie
          document.cookie = `LOCALE=${e.target.value} ; path=/`;
          window.location.reload();
        }}
      >
        <option value="en">EN</option>
        <option value="gr">GR</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
