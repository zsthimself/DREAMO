"use client";

import { useState } from 'react';
import { locales, localeConfig, ValidLocale } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (locale: ValidLocale) => {
    // 在实际应用中，这里应该处理语言切换逻辑
    // 目前只是模拟切换功能
    setIsOpen(false);
    
    // 示例：如果实现了i18n，这里可以重定向到对应的语言URL
    // window.location.pathname = `/${locale}${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`;
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 px-3 py-1 text-sm rounded-md hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <span role="img" aria-label="Current language flag">
          {localeConfig['en'].flag}
        </span>
        <span>{localeConfig['en'].name}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((locale) => (
              <button
                key={locale}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange(locale)}
                role="menuitem"
              >
                <span role="img" aria-label={`${localeConfig[locale].name} flag`}>
                  {localeConfig[locale].flag}
                </span>
                {localeConfig[locale].name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 