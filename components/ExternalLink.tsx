import { FC } from 'react'
import { useTranslation } from 'next-i18next'

export interface ExternalLinkProps {
  children: React.ReactNode
  href: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href }) => {
  const { t } = useTranslation(['common'])
  return (
    <a
      className="inline-flex items-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only">{t('opens-in-new-tab')}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
          fill="currentColor"
        />
        <path
          d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}

export default ExternalLink
