import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider, addLocaleData, defineMessages } from 'react-intl'
import ru from 'react-intl/locale-data/ru'
import uk from 'react-intl/locale-data/uk'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

addLocaleData([...ru, ...uk])

const messages = defineMessages({
  en: {
    'Website.title': 'Kyiv Burgers Rating',
    'Header.subheading': 'Rating is formed based on author\'s humble opinion',
  },
  ru: {
    'Website.title': 'Рейтинг Бургеров в Киеве',
    'Header.subheading': 'Рейтинг сформирован основываясь на скромном мнении автора',
  },
  uk: {
    'Website.title': 'Рейтинг Бургерів у Києві',
    'Header.subheading': 'Рейтинг сформировано базуючись на скромній думці автора',
  },
})

class ApplicationTranslated extends PureComponent {
  state = { language: 'en'}

  constructor() {
    super()
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(language) {
    this.setState({ language })
  }

  render() {
    const { language } = this.state

    return (
      <IntlProvider
        locale={language}
        messages={messages[language]}
      >
        <App changeLanguage={this.changeLanguage} />
      </IntlProvider>
    )
  }
}

ReactDOM.render(<ApplicationTranslated />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
