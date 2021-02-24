import axios from "axios";
import React, { useState } from "react";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";
import styles from "./AddInvoice.module.css";
export function AddInvoice() {
  let history = useHistory();
  const [number, setNumber] = useState("");
  const [invDate, setInvDate] = useState("");
  const [supDate, setSupDate] = useState("");
  const [comment, setComment] = useState("");
  const id = uniqid();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.post("http://localhost:3000/invoices", {
      id: id,
      number: number,
      date_created: invDate,
      date_supplied: supDate,
      comment: comment,
    });
    setComment("");
    setInvDate("");
    setNumber("");
    setSupDate("");
    await history.push("/");
  }
  return (
    <div className={styles.addBody}>
      <h1 className={styles.title}>Create Invoice</h1>
      <div className={styles.formRound}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputList}>
            <div className={styles.inputForm}>
              <label for="number">Number:</label>
              <input
                className={styles.input}
                minLength="3"
                required
                value={number}
                name="number"
                onChange={({ target: { value } }) => setNumber(value)}
              />
            </div>
            <div className={styles.inputForm}>
              <label for="invDate">Invoice Date:</label>
              <input
                className={styles.input}
                required
                value={invDate}
                type="date"
                name="invDate"
                onChange={({ target: { value } }) => setInvDate(value)}
              />
            </div>

            <div className={styles.inputForm}>
              <label for="supDate">Supply Date:</label>
              <input
                className={styles.input}
                required
                value={supDate}
                type="date"
                name="supDate"
                onChange={({ target: { value } }) => setSupDate(value)}
              />
            </div>
          </div>
          <div className={styles.textareaForm}>
            <label for="comment">Comment:</label>
            <textarea
              className={styles.textarea}
              maxLength="160"
              required
              value={comment}
              name="comment"
              onChange={({ target: { value } }) => setComment(value)}
            />
          </div>
        </form>
        <button className={styles.button} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
