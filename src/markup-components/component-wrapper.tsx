// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { FunctionComponent } from "react"
import ReactDOMServer from "react-dom/server"
import { CustomTranslations, IntlProvider, locale } from "../react-components"

export type Context =
  | {
      locale?: locale
    }
  | CustomTranslations

export const ComponentWrapper = <Props extends {}>(
  Component: FunctionComponent<Props>,
  props: Props,
  context: Context,
) => {
  return ReactDOMServer.renderToStaticMarkup(
    <IntlProvider<Context> {...context}>
      <Component {...props} />
    </IntlProvider>,
  )
}
