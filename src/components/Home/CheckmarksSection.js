import React from 'react'
import {
  CodeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  TemplateIcon,
} from '@heroicons/react/outline'

import CheckmarkItem from './CheckmarkItem'

export default function CheckmarksSection() {
  return (
    <div>
      <h3 className="text-3xl">If you need:</h3>
      <ul className="my-10 w-4/5">
        <CheckmarkItem Icon={CodeIcon}>
          An experienced developer with over 10 years of experience
        </CheckmarkItem>
        <CheckmarkItem Icon={TemplateIcon}>
          A freelance React developer comfortable with Context API, Redux, and
          other state management options
        </CheckmarkItem>
        <CheckmarkItem Icon={SparklesIcon}>
          A developer with an eye for design, detail, and polish
        </CheckmarkItem>
        <CheckmarkItem Icon={ShieldCheckIcon}>
          A professional, reliable software developer with proactive
          communication and a proven track record
        </CheckmarkItem>
      </ul>
      <h3 className="text-2xl">You&apos;re in the right place.</h3>
    </div>
  )
}
