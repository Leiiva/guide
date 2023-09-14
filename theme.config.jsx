import { Children } from 'react'
import Image from 'next/image'
import SlayteLogo from './resources/slayte-logo.png'
import React from 'react'

const LinkToAnchor = ({ children }) => {
  return (
    <a href={children}>
      {children}
    </a>
  )
}

const slayteLogoDataURL = 'data:image/png;base64,${SlayteLogo.src}';

export default {
    useNextSeoProps() {
        return {
            titleTemplate: 'Slayte Help Center'
        }
    },
    
    head: (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nextra" />
        <meta property="og:description" content="The next site builder" />
        <link rel='icon' href = {slayteLogoDataURL} />
        </>
    ),
    primaryHue: 190,
    logo: (
        <>
            <Image src={SlayteLogo} alt="Slayte Logo" width={40} height={40} />
            <span style={{ marginLeft: '.4em', fontWeight: 400 }}>
                Slayte Help Center
            </span>
        </>
    ),
    sidebar:{
        defaultMenuCollapseLevel: 1,
        autoCollapse: true
    },
    toc:{
        float: true,
        title: "On this Article"
    },
    footer: {
        text: (
            <span>
                Slayte Help Center {new Date().getFullYear()} ©{' '}
                <a href="https://slayte.com/" target="_blank">
                Slayte
                </a>
                .
            </span>
        )
    },
    mdx:{
        linkToAnchor: true,
        components: {
            LinkToAnchor: LinkToAnchor
        }
    }
  }