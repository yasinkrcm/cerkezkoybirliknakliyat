import "../styles/globals.css"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      <Analytics />
    </>
  )
}
