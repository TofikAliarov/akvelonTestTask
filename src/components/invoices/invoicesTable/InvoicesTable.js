import axios from "axios";
import React from "react";
import styles from "./InvoicesTable.module.css";
import { useHistory } from "react-router-dom";

export function InvoicesTable({ list, setList }) {
  let history = useHistory();

  function deleteElement(id) {
    axios.delete(`http://localhost:3000/invoices/${id}`);
    setList(list.filter((el) => el.id !== id));
  }

  function openChangeInvoicePage(id) {
    history.push(`/update:${id}`);
  }

  return (
    <div>
      <h2>Invoices</h2>

      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableTitle}>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
            <th>delete</th>
            <th>update</th>
          </tr>
          {list.map((el) => (
            <tr key={el.id}>
              <td>{el.date_created}</td>
              <td>{el.number}</td>
              <td>{el.date_supplied}</td>
              <td>{el.comment}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => deleteElement(el.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => openChangeInvoicePage(el.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
