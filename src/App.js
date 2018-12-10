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
    <header className="App-header">
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
      <select onChange={e => changeLanguage(e.target.value)} name="language" id="lang">
        <option value="ru">
          Русский
        </option>
        <option value="uk">
          Українська
        </option>
        <option selected value="en">
          English
        </option>
      </select>
    </header>
    <main>
      <div className="chart-content">
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
          containerComponent={<VictoryContainer className="burgers-chart" style={{ minHeight: '480px' }}/>}
        >
          <VictoryAxis dependentAxis />
          <VictoryAxis
            tickFormat={x => `${x.substr(0, 5)}...`}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip/>}
            data={burgerData}
            x="place"
            y="rating"
          />
        </VictoryChart>
      </div>
    </main>
  </div>
)

export default App
