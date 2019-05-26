import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'soska-theme-2018',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: 'Muli',
      styles: ['300', '400i', '700', '900'],
    },
  ],
  headerFontFamily: ['Muli', 'sans-serif'],
  bodyFontFamily: ['Muli', 'sans-serif'],
  bodyColor: '#3c3b3a',
  headerWeight: 900,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      background: 'white',
    },
    // h1: {
    //   fontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'].join(','),
    // },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    kbd: {
      fontSize: '0.85rem',
      lineHeight: '1.75rem',
      fontFamily: '"Noto Serif", monospace',
      color: '#789',
      display: 'inline-block',
      padding: '0 6px',
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '3px',
      boxShadow: 'rgba(0,0,0,.5) 1px 1px 0',
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      // boxShadow: '0 1px 0 0 currentColor',
      color: '#3c3a3b',
      borderBottom: 'solid 5px #dcf4dd',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: 'black',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
};


export default theme