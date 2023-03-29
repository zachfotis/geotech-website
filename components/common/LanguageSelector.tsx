'use client';

import FlagEN from 'assets/icons/flag-en.png';
import FlagGR from 'assets/icons/flag-gr.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LanguageSelector({ lang }: { lang: string }) {
  const [language, setLanguage] = useState(lang);

  useEffect(() => {
    document.cookie = `lang=${language}; path=/`;
  }, [language]);

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
        defaultValue={language}
        onChange={(e) => {
          setLanguage(e.target.value);
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
