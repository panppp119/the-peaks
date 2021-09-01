import { useState } from 'react'

import * as SDC from './sortDropdown.style'

const defaultOptions = [
  { value: 'newest', name: 'Newest First' },
  { value: 'oldest', name: 'Oldest First' },
  { value: 'q', name: 'Most Popular' },
]

const SortDropdown = ({ style, options }) => {
  const [selected, setSelected] = useState(defaultOptions[0])
  const [showOptions, setShowOptions] = useState(false)

  const onShowOptions = () => {
    setShowOptions(!showOptions)
  }

  const closeShowOptions = (e) => {
    setShowOptions(false)
  }

  const handleChangeSelected = (option) => {
    setSelected(option)
    closeShowOptions()
  }

  return (
    <SDC.Select style={style}>
      <SDC.DisplaySelected onClick={onShowOptions}>
        {selected.name}
      </SDC.DisplaySelected>

      {showOptions && (
        <SDC.Options>
          {defaultOptions
            .filter((option) => options.includes(option.value))
            .map((option, index) => {
              return (
                <SDC.Option
                  key={index}
                  onClick={() => handleChangeSelected(option)}
                >
                  {option.name}
                </SDC.Option>
              )
            })}
        </SDC.Options>
      )}
    </SDC.Select>
  )
}

export default SortDropdown
