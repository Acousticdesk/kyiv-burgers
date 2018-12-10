import React from 'react'
import {
  VictoryBar, VictoryChart, VictoryTheme, VictoryContainer, VictoryAxis,
  VictoryTooltip,
} from 'victory'
import { FormattedMessage } from 'react-intl'

import './App.css'

import burgerData from './data'

const App = ({ changeLanguage }) => (
  <div className="App">
    <header className="App-header" style={{ height: '15vh' }}>
      <h1>
        <FormattedMessage
          id="Website.title"
          defaultMessage="Kyiv Burgers Rating"
        />
      </h1>
      <p className="small">
        <FormattedMessage
          id="Header.subheading"
          defaultMessage="Rating is formed based on author's humble opinion"
        />
      </p>
      <ul className="language-select">
        <li onClick={changeLanguage('ru')}>Russian</li>
        <li onClick={changeLanguage('en')}>English</li>
        <li onClick={changeLanguage('ua')}>Українська</li>
      </ul>
    </header>
    <main style={{ height: '85vh' }}>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        containerComponent={<VictoryContainer className="burgers-chart" style={{ width: '50%', height: '100%' }}/>}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis
          tickFormat={x => `${x.substr(0, 5)}...`}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={burgerData}
          x="place"
          y="rating"
        />
      </VictoryChart>
    </main>
  </div>
)

export default App
