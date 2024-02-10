import { useThemeProvider } from "@src/providers/ThemeProvider/useThemeProvider"
import { FormattedMessage } from "react-intl";


export default function ToggleThemeButton() {
  const {lightMode, toggleLightMode} = useThemeProvider();

  return (
    <div className="firago-medium fixed left-4 lg:left-4 bottom-20 lg:bottom-8 border border-solid border-orange-primary px-1 py-2 rounded-xl bg-orange-primary text-white text-sm cursor-pointer dark:bg-[#212121] dark:text-orange-primary" onClick={toggleLightMode}>{lightMode ? <FormattedMessage id="light"/> : <FormattedMessage id="dark"/>}</div>
  )
}
