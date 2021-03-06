import { useTheme, useMediaQuery } from "@material-ui/core"

export default function isMobile(): boolean {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('sm'))
}
