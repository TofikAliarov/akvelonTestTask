import axios from "axios";
import React, { useState, useEffect } from "react";
import { InvoicesTable } from "./invoicesTable/InvoicesTable";
import { useHistory } from "react-router-dom";
import styles from "./Invoices.module.css";

export function Invoices() {
  let history = useHistory();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    await axios
      .get("http://localhost:3000/invoices")
      .then((res) => setList(res.data));
  }

  function openAddInvoicePage() {
    history.push("/add");
  }
  return (
    <div className={styles.invBody}>
      <h1 className={styles.title}>Invoices</h1>
      <div className={styles.actionsBlock}>
        <h2>
          <span>Actions</span>
        </h2>
        <button className={styles.button} onClick={openAddInvoicePage}>
          Add new
        </button>
      </div>
      <div className={styles.actionsBlock}>
        <InvoicesTable list={list} setList={setList} />
      </div>
    </div>
  );
}
