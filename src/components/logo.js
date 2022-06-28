/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import { Link } from 'components/link'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'Links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt="next js landing page logo" />
    </Link>
  )
}
