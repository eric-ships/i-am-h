import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from 'actions/messageActionCreators'

import styles from 'styles/add-message'

let AddMessage = ({ dispatch }) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addMessage(input.value))
    input.value = ''
  }

  return (
    <div className={styles.addMessage}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input className={styles.input} ref={node => {
          input = node
        }} />
        <button className={styles.button} type="submit">
          Respond
        </button>
      </form>
    </div>
  )
}

AddMessage = connect()(AddMessage)

export default AddMessage
